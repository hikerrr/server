import express from 'express';
import uploadController from '../controllers/upload';
import adminAuth from '../authentication/admin';

const router = express.Router();

router.post('/photos', adminAuth, uploadController.uploadPhotos);

export default router;
