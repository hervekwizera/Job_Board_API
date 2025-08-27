// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose"; 
import connectDB from "./config/db.js";
 
import rateLimiter from "./middleware/rateLimiter.js";

// Routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import jobRoutes from "./routes/job.routes.js";

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 3000;

// Initialize express
const app = express();

// ✅ Middlewares
app.use(express.json()); // Parse JSON requests
app.use(rateLimiter);
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(cors()); // Enable CORS for all origins


// ✅ API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/jobs", jobRoutes);

// ✅ Health check / Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Job Tracker API 🚀");
});

// ✅ Start Server + Connect to DB
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit if DB connection fails
  }
};

startServer();

// ✅ Graceful shutdown
process.on("SIGINT", async () => {
  console.log("🔻 Shutting down server...");
  await mongoose.connection.close();
  console.log("✅ MongoDB connection closed");
  process.exit(0);
});

export default app; // useful for testing (Jest/Supertest)
