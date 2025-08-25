import Job from "../models/job.model.js";

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ isActive: true }) // only active jobs
      .populate("postedBy", "name email role")      // populate employer info
      .sort({ createdAt: -1 });                     // latest jobs first
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Get jobs error:", error.message);
    res.status(500).json({ message: "Failed to fetch jobs", error: error.message });
  }
};

// @desc    Create new job
// @route   POST /api/jobs
// @access  Private (employers/admins only)
export const createJob = async (req, res) => {
  const { title, description, company, location, salary } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  try {
    // req.user is set by 'protect' middleware
    const newJob = new Job({
      title,
      description,
      company,
      location,
      salary,
      postedBy: req.user._id, // link job to logged-in employer/admin
    });

    const savedJob = await newJob.save();
    res.status(201).json({
      message: "Job created successfully ✅",
      job: savedJob,
    });
  } catch (error) {
    console.error("Create job error:", error.message);
    res.status(500).json({ message: "Failed to create job", error: error.message });
  }
};
