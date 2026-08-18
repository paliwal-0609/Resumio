import express from 'express';
import { enhanceJobDescription, enhanceProfessionalSummary } from '../controllers/aiController.controller.js';
import { updateResume } from '../controllers/resumeController.controller.js';
import protect from '../middlewares/authMiddleware.middleware.js';

const aiRouter = express.Router();

aiRouter.post('/enhance-pro-sum', protect, enhanceProfessionalSummary);
aiRouter.post('/enhance-job-desc', protect, enhanceJobDescription);
aiRouter.post('/upload-resume', protect, updateResume);

export default aiRouter;
