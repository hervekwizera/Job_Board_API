import express from "express";
import { getUsers, getUserById } from "../controllers/user.controller.js";

const router = express.Router();

// User Routes
router.get("/", getUsers);         // GET all users
router.get("/:id", getUserById);   // GET single user

export default router;
