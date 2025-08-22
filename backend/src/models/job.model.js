import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    type: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Contract", "Internship", "Remote"],
      default: "Full-Time",
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
    },
    salary: {
      type: Number,
      default: 0,
    },
    skills: {
      type: [String], // Array of skills e.g. ["JavaScript", "React", "Node.js"]
      default: [],
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", // assuming you’ll have a User model later
      required: true,
    },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
