import jwt from 'jsonwebtoken';
import Doctor from '../Models/doctorSchema.js';
import User from '../Models/userSchema.js';

// Authentication Middleware
export const authentication = async (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  try {
    const token = authToken.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // This will fail if SECRET_KEY is missing
    req.userId = decoded.id;
    req.role = decoded.role;
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: User not found'
      });
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      console.error("JWT Error:", error.message);
      return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
    }
    console.error("Other error:", error);
  }
};




// Restriction Middleware
export const restriction = (roles) => (req, res, next) => {
  try {
    // Check if user role is allowed
    if (!roles.includes(req.role)) {
      return res.status(403).json({ success: false, message: 'Forbidden: Insufficient permissions' });
    }

    next();
  } catch (error) {
    console.error('Restriction error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error: Unable to authorize' });
  }
};
