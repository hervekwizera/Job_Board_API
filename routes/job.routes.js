import express from 'express';
import { authorize, employer } from '../middlewares/auth.middleware.js';
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob
} from '../controllers/job.controller.js';

const jobRouter = express.Router();

jobRouter.route('/')
  .get(getAllJobs)
  .post(authorize, employer, createJob);

jobRouter.route('/:id')
  .get(getJobById)
  .put(authorize, employer, updateJob)
  .delete(authorize, employer, deleteJob);

export default jobRouter;
