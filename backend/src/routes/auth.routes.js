import express from "express";

const router = express.Router();

// Test: Login
router.post("/login", (req, res) => {
  res.json({ message: "Login route working ✅" });
});

// Test: Register
router.post("/register", (req, res) => {
  res.json({ message: "Register route working ✅" });
});

export default router;
