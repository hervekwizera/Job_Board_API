
import express from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const router = express.Router();

// Auth Routes
router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;
