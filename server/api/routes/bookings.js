import express from 'express';
import bookingController from '../controllers/booking';

const router = express.Router();

router
  .route('/')
  .get(bookingController.getAll)
  .post(bookingController.addOne)
  .put(bookingController.notAllowed)
  .patch(bookingController.notAllowed)
  .delete(bookingController.deleteAll);

router
  .route('/:_id')
  .get(bookingController.getOne)
  .post(bookingController.notAllowed)
  .put(bookingController.updateOne)
  .patch(bookingController.updateOne)
  .delete(bookingController.deleteOne);

export default router;
