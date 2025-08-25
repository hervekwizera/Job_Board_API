import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    salary: {
      type: Number,
      min: [0, "Salary cannot be negative"],
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // link to the user (employer) who posted
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true, // for soft delete or deactivated jobs
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
