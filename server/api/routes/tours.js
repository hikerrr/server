import express from 'express';
import tourController from '../controllers/tour';

const router = express.Router();

router
  .route('/')
  .get(tourController.getAll)
  .post(tourController.addOne)
  .put(tourController.notAllowed)
  .patch(tourController.notAllowed)
  .delete(tourController.deleteAll);

router
  .route('/:linkName')
  .get(tourController.getOne)
  .post(tourController.notAllowed)
  .put(tourController.updateOne)
  .patch(tourController.updateOne)
  .delete(tourController.deleteOne);

router.route('/:linkName/bookings').get(tourController.getAllBookings);

export default router;
