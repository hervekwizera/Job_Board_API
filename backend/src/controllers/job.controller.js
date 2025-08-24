// controllers/job.controller.js

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
export const getJobs = (req, res) => {
  // TODO: Fetch jobs from DB
  res.json({ message: "Get all jobs ✅" });
};

// @desc    Create new job
// @route   POST /api/jobs
// @access  Private (later: require auth)
export const createJob = (req, res) => {
  const { title, description } = req.body;
  // TODO: Save job to DB
  res.json({ message: `Job created: ${title} ✅` });
};
