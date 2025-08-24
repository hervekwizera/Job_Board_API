// controllers/auth.controller.js

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const loginUser = (req, res) => {
  // TODO: Add login logic (e.g., check DB, JWT, bcrypt)
  res.json({ message: "Login route working ✅" });
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = (req, res) => {
  // TODO: Add register logic (e.g., hash password, save user)
  res.json({ message: "Register route working ✅" });
};
