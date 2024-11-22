import User from "../Models/userSchema.js";
import Doctor from "../Models/doctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
};

// User Registration
export const register = async (req, res) => {
  const { email, password, confirmPassword, name, role, photo, gender } = req.body;

  // Validate role
  if (!["patient", "doctor"].includes(role)) {
    return res.status(400).json({ success: false, msg: "Invalid role specified" });
  }

  // Validate password length
  if (password.length < 8) {
    return res.status(400).json({ success: false, msg: "Password must be at least 8 characters long" });
  }

  // Validate password confirmation
  // if (password !== confirmPassword) {
  //   return res.status(400).json({ success: false, msg: "Passwords do not match" });
  // }

  // Validate gender field (optional, depending on your use case)
  if (!["male", "female", "other"].includes(gender)) {
    return res.status(400).json({ success: false, msg: "Invalid gender specified" });
  }

  try {
    // Check if user or doctor already exists
    const userExists = await User.findOne({ email }) || await Doctor.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, msg: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create new user or doctor
    const newUser = role === "patient"
      ? new User({ email, password: hashPassword, name, role, photo, gender })
      : new Doctor({ email, password: hashPassword, name, role, photo, gender });

    await newUser.save();

    // Generate token
    const token = generateToken(newUser);

    // Send success response with token
    res.status(200).json({
      success: true,
      msg: "Account created successfully",
      token, // Send token back
    });
  } catch (error) {
    console.error("Registration error:", error.message);
    res.status(500).json({ success: false, msg: "Something went wrong" });
  }
};

// User Login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user in either User or Doctor collection
    const user =
      (await User.findOne({ email }).select("+password")) ||
      (await Doctor.findOne({ email }).select("+password"));

    if (!user) {
      return res.status(400).json({ success: false, msg: "User does not exist" });
    }

    // Check if the password is correct
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ success: false, msg: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user);

    // Return user data excluding the password
    const { password: userPassword, ...userData } = user.toObject();

    // Log successful login (ensure no sensitive info like password is logged)
    console.log(`Login successful for user: ${user.email}, Role: ${user.role}`);

    res.status(200).json({
      success: true,
      msg: "Login successful",
      token,
      user: { name: userData.name, email: userData.email, photo: userData.photo },
      role: userData.role,
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ success: false, msg: "Something went wrong" });
  }
};
