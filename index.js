import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import jobRouter from './routes/job.routes.js'
import errorMiddleware from './middlewares/error.middleware.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
 app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/job', jobRouter);
app.use(errorMiddleware);

// Root route
app.get('/', (req, res) => {
  res.send('Job Board API is running');
});

// Connect to MongoDB and start server
mongoose.connect(process.env.db_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Subscription tracker API is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));



