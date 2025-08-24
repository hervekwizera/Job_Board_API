// controllers/user.controller.js

// @desc    Get all users
// @route   GET /api/users
// @access  Public (later: Private/Admin)
export const getUsers = (req, res) => {
  // TODO: Fetch users from DB
  res.json({ message: "Get all users ✅" });
};

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Public (later: Private/Admin)
export const getUserById = (req, res) => {
  const { id } = req.params;
  // TODO: Fetch user from DB using id
  res.json({ message: `Get user with ID: ${id} ✅` });
};
