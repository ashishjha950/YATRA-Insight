import User from '../users/user.model.js'
import { signToken } from '../../utils/jwt.js'
import Otp from '../users/otp.model.js'
import crypto from 'crypto'
import { sendEmailOtp } from '../../services/email.service.js'

export const sendOtp = async (req, res) => {
  const { email } = req.body

  if (!email)
    return res.status(400).json({ message: 'Email is required' })

  const normalizedEmail = email.toLowerCase().trim()

  const otp = crypto.randomInt(100000, 999999).toString()

  // Ensure single active OTP
  await Otp.deleteMany({ email: normalizedEmail })

  await Otp.create({
    email: normalizedEmail,
    otp,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000)
  })

  await sendEmailOtp(normalizedEmail, otp)

  res.json({ message: 'OTP sent successfully' })
}


export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body

  if (!email || !otp)
    return res.status(400).json({ message: 'Invalid request' })

  const normalizedEmail = email.toLowerCase().trim()

  const otpRecord = await Otp.findOne({ email: normalizedEmail })

  if (!otpRecord)
    return res.status(401).json({ message: 'OTP expired or invalid' })

  if (otpRecord.expiresAt < new Date()) {
    await Otp.deleteMany({ email: normalizedEmail })
    return res.status(401).json({ message: 'OTP expired' })
  }

  if (otpRecord.otp !== otp)
    return res.status(401).json({ message: 'Invalid OTP' })

  let user = await User.findOne({ email: normalizedEmail })

  if (!user) {
    user = await User.create({
      email: normalizedEmail,
      isVerified: true
    })
  } else if (!user.isVerified) {
    user.isVerified = true
    await user.save()
  }

  await Otp.deleteMany({ email: normalizedEmail })

  const token = signToken({
    id: user._id,
    role: user.role
  })

  res.json({
    token,
    user
  })
}
