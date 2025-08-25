import express from "express";
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// All routes require authentication
router.use(protect);

// CRUD Routes
router.get("/", getUsers);         // Admin only
router.get("/:id", getUserById);   // Admin or self
router.put("/:id", updateUser);    // Admin or self
router.delete("/:id", deleteUser); // Admin or self (soft delete)

export default router;
