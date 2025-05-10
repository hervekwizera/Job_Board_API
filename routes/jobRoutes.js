const express = require('express');
const router = express.Router();
const { protect, employer } = require('../middleware/auth');
const {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob
} = require('../controllers/jobController');

router.route('/')
    .get(getAllJobs)
    .post(protect, employer, createJob);

router.route('/:id')
    .get(getJobById)
    .put(protect, employer, updateJob)
    .delete(protect, employer, deleteJob);

module.exports = router;