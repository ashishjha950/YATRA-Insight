import bcrypt from 'bcryptjs'
import User from '../users/user.model.js'
import { signToken } from '../../utils/jwt.js'

/**
 * REGISTER
 */
export const register = async (req, res) => {
  const { name, email, password } = req.body

  const exists = await User.findOne({ email })
  if (exists)
    return res.status(409).json({ message: 'User already exists' })

  const hashed = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    password: hashed,
    role: 'USER' // FORCE user role
  })

  const token = signToken({
    id: user._id,
    role: user.role
  })

  res.status(201).json({
    token,
    user: {
      id: user._id,
      name: user.name,
      role: user.role
    }
  })
}


/**
 * LOGIN
 */
export const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password)
    return res.status(400).json({ message: 'Email & password required' })

  const user = await User.findOne({ email }).select('+password')
  if (!user)
    return res.status(401).json({ message: 'Invalid credentials' })

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch)
    return res.status(401).json({ message: 'Invalid credentials' })

  const token = signToken({
    id: user._id,
    role: user.role
  })

  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  })
}
