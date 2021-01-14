import express from 'express';
import tourController from '../controllers/tour';

const router = express.Router();

router.route('/').get(tourController.listAll);

router.route('/:linkName').get(tourController.listOne);

router.post('/booking', tourController.bookTour);

export default router;
