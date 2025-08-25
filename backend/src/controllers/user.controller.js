import User from "../models/User.js";

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
export const getUsers = async (req, res) => {
  try {
    // Only admins can fetch all users
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only ❌" });
    }

    const users = await User.find({ isActive: true }).select("-password").sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.error("Get users error:", error.message);
    res.status(500).json({ message: "Failed to fetch users", error: error.message });
  }
};

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin or self
export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    // Admins can get any user; users can get only themselves
    if (req.user.role !== "admin" && req.user._id.toString() !== id) {
      return res.status(403).json({ message: "Access denied ❌" });
    }

    const user = await User.findById(id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found ❌" });

    res.status(200).json(user);
  } catch (error) {
    console.error("Get user by ID error:", error.message);
    res.status(500).json({ message: "Failed to fetch user", error: error.message });
  }
};

// @desc    Update user by ID
// @route   PUT /api/users/:id
// @access  Private/Admin or self
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  try {
    // Admins can update any user; users can update only themselves (except role)
    if (req.user.role !== "admin" && req.user._id.toString() !== id) {
      return res.status(403).json({ message: "Access denied ❌" });
    }

    const updateData = { name, email };
    if (req.user.role === "admin" && role) updateData.role = role; // only admins can change role

    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true }).select("-password");
    if (!updatedUser) return res.status(404).json({ message: "User not found ❌" });

    res.status(200).json({
      message: "User updated successfully ✅",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Update user error:", error.message);
    res.status(500).json({ message: "Failed to update user", error: error.message });
  }
};

// @desc    Delete user by ID
// @route   DELETE /api/users/:id
// @access  Private/Admin or self (soft delete)
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // Admins can delete any user; users can delete only themselves
    if (req.user.role !== "admin" && req.user._id.toString() !== id) {
      return res.status(403).json({ message: "Access denied ❌" });
    }

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found ❌" });

    // Soft delete
    user.isActive = false;
    await user.save();

    res.status(200).json({ message: "User deleted successfully ✅" });
  } catch (error) {
    console.error("Delete user error:", error.message);
    res.status(500).json({ message: "Failed to delete user", error: error.message });
  }
};
