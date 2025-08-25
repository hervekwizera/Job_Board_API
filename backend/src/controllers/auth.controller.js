import jwt from "jsonwebtoken";
import User from "../models/User.js";

// 🔑 Generate JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    // 2. Find user (explicitly select password since default is false)
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid credentials ❌" });

    // 3. Check password using schema method
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials ❌" });

    // 4. Generate token
    const token = generateToken(user);

    res.status(200).json({
      message: "Login successful ✅",
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // 1. Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please provide all fields" });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // 3. Create user (password hashing handled in schema pre-save)
    const newUser = await User.create({
      name,
      email,
      password,
      role, // optional, defaults to "jobseeker"
    });

    // 4. Generate token
    const token = generateToken(newUser);

    res.status(201).json({
      message: "User registered successfully ✅",
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role },
    });
  } catch (error) {
    console.error("Register error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
