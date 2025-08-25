import express from "express";
import { getJobs, createJob } from "../controllers/job.controller.js";
import { protect, employerOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public route: anyone can see jobs
router.get("/", getJobs);

// Private route: only logged-in employers/admins can create jobs
router.post("/", protect, employerOnly, createJob);

export default router;
