import express from 'express';
import careerController from '../controllers/career';

const router = express.Router();

router.route('/').get(careerController.listAll);

export default router;
