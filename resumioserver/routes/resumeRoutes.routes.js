import express from 'express';
import protect from '../middlewares/authMiddleware.middleware.js';
import { createResume, deleteResume, getPublicResumeById, getResumeById, updateResume } from '../controllers/resumeController.controller.js';
import upload from '../configs/multer.js';


const resumeRouter = express.Router();

resumeRouter.post('/create', protect, createResume);
resumeRouter.put('/update', upload.single('image'), protect, updateResume);
resumeRouter.delete('/delete/:resumeId', protect, deleteResume);
resumeRouter.post('/get/:resumeId', protect, getResumeById);
resumeRouter.post('/public/:resumeId', getPublicResumeById);

export default resumeRouter;