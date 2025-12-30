import jwt from 'jsonwebtoken'
import ApiError from '../utils/apiError.js'

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer '))
    throw new ApiError(401, 'Unauthorized')

  try {
    const token = authHeader.split(' ')[1]
    req.user = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch {
    throw new ApiError(401, 'Invalid token')
  }
}
