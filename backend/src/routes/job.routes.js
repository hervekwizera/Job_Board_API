// routes/job.routes.js
import express from "express";
import { getJobs, createJob } from "../controllers/job.controller.js";
import { protect, employerOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

// Job Routes
router.get("/", getJobs);                        // Public: GET all jobs
router.post("/", protect, employerOnly, createJob); // Protected: Only employers can create jobs

export default router;
