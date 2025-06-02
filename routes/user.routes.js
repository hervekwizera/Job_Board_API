import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";
import { register, login } from "../controllers/auth.controller.js";

const userRouter = Router();

// Public routes
userRouter.post('/', register);         // Register new user
userRouter.post('/login', login);       // Login user (you may have missed this route)

// Protected routes
userRouter.get('/', authorize, getUsers);  
userRouter.get('/:id', authorize, getUser);
userRouter.put('/:id', authorize, (req, res) => res.send({ title: 'UPDATE user' }));
userRouter.delete('/:id', authorize, (req, res) => res.send({ title: 'DELETE user' }));

export default userRouter;
