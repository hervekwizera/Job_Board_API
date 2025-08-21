// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(cors()); // Enable CORS

// Test route
app.get("/", (req, res) => {
  res.send("Hello World 🌍");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
