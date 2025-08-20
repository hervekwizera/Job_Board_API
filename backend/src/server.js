// server.js
import express from "express";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Test route
app.get("/", (req, res) => {
  res.send("Hello World 🌍");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
