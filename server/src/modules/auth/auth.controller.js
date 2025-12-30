import User from '../users/user.model.js'
import { signToken } from '../../utils/jwt.js'
import Otp from '../users/otp.model.js'
import crypto from 'crypto'

export const sendOtp = async (req, res) => {
  const { identifier } = req.body

  if (!identifier)
    return res.status(400).json({ message: 'Email or phone required' })

  const otp = crypto.randomInt(100000, 999999).toString()

  await Otp.deleteMany({ identifier })

  await Otp.create({
    identifier,
    otp,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000)
  })

  // TODO: send email or SMS based on identifier
  console.log('OTP:', otp)

  res.json({ message: 'OTP sent successfully' })
}


export const verifyOtp = async (req, res) => {
  const { identifier, otp } = req.body

  if (!identifier || !otp)
    return res.status(400).json({ message: 'Invalid request' })

  const otpRecord = await Otp.findOne({ identifier })

  if (!otpRecord || otpRecord.otp !== otp)
    return res.status(401).json({ message: 'Invalid or expired OTP' })

  let user = await User.findOne({
    $or: [{ email: identifier }, { phone: identifier }]
  })

  if (!user) {
    user = await User.create({
      email: identifier.includes('@') ? identifier : undefined,
      phone: identifier.includes('@') ? undefined : identifier,
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