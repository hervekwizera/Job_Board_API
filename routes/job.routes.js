import express from 'express';
import { authorize} from '../middlewares/auth.middleware.js';
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
  .post(authorize, createJob);

jobRouter.route('/:id')
  .get(getJobById)
  .put(authorize, updateJob)
  .delete(authorize, deleteJob);

export default jobRouter;
