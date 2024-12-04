import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/userSchema.js";

export const authenticate = async (req, res, next) => {
  // Token from header
  const authToken = req.headers.authorization;

  // Check if token exists
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Access token not found",
      code: "TOKEN_NOT_FOUND", // Custom error code
    });
  }

  try {
    const token = authToken.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    req.role = decoded.role;
    next(); // Proceed to the next middleware or route
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Access token expired",
        code: "TOKEN_EXPIRED", // Custom error code
      });
    }
    return res.status(401).json({
      success: false,
      message: "Invalid access token",
      code: "INVALID_TOKEN", // Custom error code
    });
  }
};


export const restrict = (roles) => async (req, res, next) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // Try to find the user in either collection.
    const user = await User.findById(userId) || await Doctor.findById(userId);

    // If user is not found, return 404.
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if the user's role is in the allowed roles array.
    if (!roles.includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    // If role is valid, continue to the next middleware.
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
