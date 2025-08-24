import express from "express";
import { getJobs, createJob } from "../controllers/job.controller.js";

const router = express.Router();

// Job Routes
router.get("/", getJobs);       // GET all jobs
router.post("/", createJob);    // POST new job

export default router;
