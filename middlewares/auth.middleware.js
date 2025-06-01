import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.js';
import User from '../models/user.model.js';

// Middleware to authorize any authenticated user
export const authorize = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized', error: error.message });
  }
};

// Middleware to restrict access to only employers
export const employer = (req, res, next) => {
  try {
    if (req.user && req.user.role === 'employer') {
      return next();
    } else {
      return res.status(403).json({ message: 'Forbidden: Employers only' });
    }
  } catch (error) {
    res.status(403).json({ message: 'Forbidden', error: error.message });
  }
};
