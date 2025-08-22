import express from "express";

const router = express.Router();

// Test: Get all jobs
router.get("/", (req, res) => {
  res.json({ message: "Get all jobs route working ✅" });
});

// Test: Post a new job
router.post("/", (req, res) => {
  res.json({ message: "Job created successfully ✅" });
});

export default router;
