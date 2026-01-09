import jwt from 'jsonwebtoken'
import ApiError from '../utils/apiError.js'
import User from "../modules/users/user.model.js"

// export const protect = (req, res, next) => {
//   const authHeader = req.headers.authorization

//   if (!authHeader || !authHeader.startsWith('Bearer '))
//     throw new ApiError(401, 'Unauthorized')

//   try {
//     const token = authHeader.split(' ')[1]
//     req.user = jwt.verify(token, process.env.JWT_SECRET)
//     next()
//   } catch {
//     throw new ApiError(401, 'Invalid token')
//   }
// }

export const protect = async (req, res, next) => {
  try {
    let token;

    // Check for Bearer token in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from token
    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      return res.status(401).json({ message: 'User not found' });
    }

    console.log('✅ Auth Success:', { 
      email: req.user.email, 
      role: req.user.role 
    });

    next();
  } catch (error) {
    console.error('❌ Auth Error:', error.message);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};



export const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'ADMIN') {
    console.log('✅ Admin Access Granted:', req.user.email);
    next();
  } else {
    console.log('❌ Admin Access Denied:', req.user?.email);
    res.status(403).json({ 
      message: 'Access denied. Admin privileges required.' 
    });
  }
};
