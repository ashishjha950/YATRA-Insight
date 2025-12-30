import bcrypt from 'bcryptjs'
import User from '../users/user.model.js'
import { signToken } from '../../utils/jwt.js'

export const adminLogin = async (req, res) => {
  const { email, password } = req.body

  const admin = await User.findOne({
    email,
    role: 'ADMIN'
  }).select('+password')

  if (!admin)
    return res.status(401).json({ message: 'Unauthorized' })

  const match = await bcrypt.compare(password, admin.password)
  if (!match)
    return res.status(401).json({ message: 'Unauthorized' })

  const token = signToken({
    id: admin._id,
    role: admin.role
  })

  res.json({
    token,
    admin: {
      id: admin._id,
      email: admin.email,
      role: admin.role
    }
  })
}
