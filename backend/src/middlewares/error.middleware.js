import ApiError from '../utils/apiError.js'

export const errorHandler = (err, req, res, next) => {
  // Default values
  let statusCode = err.statusCode || 500
  let message = err.message || 'Internal Server Error'

  // Mongoose invalid ObjectId
  if (err.name === 'CastError') {
    statusCode = 400
    message = 'Invalid ID format'
  }

  // Mongo duplicate key
  if (err.code === 11000) {
    statusCode = 409
    message = 'Duplicate field value'
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401
    message = 'Invalid token'
  }

  if (err.name === 'TokenExpiredError') {
    statusCode = 401
    message = 'Token expired'
  }

  res.status(statusCode).json({
    success: false,
    message
  })
}
