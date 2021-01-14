import express from 'express';
import tourController from '../controllers/tour';
import adminAuth from '../../authentication/admin';

const router = express.Router();

router
  .route('/')
  .get(tourController.getAll)
  .post(adminAuth, tourController.addOne)
  .put(tourController.notAllowed)
  .patch(tourController.notAllowed)
  .delete(adminAuth, tourController.deleteAll);

router
  .route('/:linkName')
  .get(tourController.getOne)
  .post(tourController.notAllowed)
  .put(adminAuth, tourController.updateOne)
  .patch(adminAuth, tourController.updateOne)
  .delete(adminAuth, tourController.deleteOne);

router
  .route('/:linkName/bookings')
  .get(adminAuth, tourController.getAllBookings);

export default router;
