import express from "express";

const router = express.Router();

// Test: Get all users
router.get("/", (req, res) => {
  res.json({ message: "Get all users route working ✅" });
});

// Test: Get user by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Get user with ID ${id} working ✅` });
});

export default router;
