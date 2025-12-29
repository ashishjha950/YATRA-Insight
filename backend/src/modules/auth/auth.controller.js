import User from '../users/user.model.js'
import { signToken } from '../../utils/jwt.js'
import Otp from '../users/otp.model.js'
import crypto from 'crypto'

export const sendOtp = async (req, res) => {
  const { email, phone } = req.body

  if (!email && !phone)
    return res.status(400).json({ message: 'Email or phone required' })

  const identifier = email || phone
  const otp = crypto.randomInt(100000, 999999).toString()

  await Otp.deleteMany({ identifier })

  await Otp.create({
    identifier,
    otp,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000)
  })

  // TODO: integrate SMS / Email service
  console.log('OTP:', otp)

  res.json({ message: 'OTP sent successfully' })
}


export const verifyOtp = async (req, res) => {
  const { email, phone, otp } = req.body

  if (!otp || (!email && !phone))
    return res.status(400).json({ message: 'Invalid request' })

  const identifier = email || phone

  const otpRecord = await Otp.findOne({ identifier })
  if (!otpRecord || otpRecord.otp !== otp)
    return res.status(401).json({ message: 'Invalid or expired OTP' })

  let user = await User.findOne(
    email ? { email } : { phone }
  )

  // AUTO-REGISTER
  if (!user) {
    user = await User.create({
      email,
      phone,
      isVerified: true
    })
  }

  await Otp.deleteMany({ identifier })

  const token = signToken({
    id: user._id,
    role: user.role
  })

  res.json({
    token,
    user: {
      id: user._id,
      email: user.email,
      phone: user.phone,
      role: user.role
    }
  })
}