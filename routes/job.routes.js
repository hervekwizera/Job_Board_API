import express from 'express';
import { protect, employer } from '../middleware/auth.middleware.js';
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob
} from '../controllers/job.controller.js';

const router = express.Router();

router.route('/')
  .get(getAllJobs)
  .post(protect, employer, createJob);

router.route('/:id')
  .get(getJobById)
  .put(protect, employer, updateJob)
  .delete(protect, employer, deleteJob);

export default router;
