import express from 'express';
import bookingController from '../controllers/booking';
import adminAuth from '../../authentication/admin';

const router = express.Router();

router
  .route('/')
  .get(adminAuth, bookingController.getAll)
  .post(adminAuth, bookingController.addOne)
  .put(bookingController.notAllowed)
  .patch(bookingController.notAllowed)
  .delete(adminAuth, bookingController.deleteAll);

router
  .route('/:_id')
  .get(adminAuth, bookingController.getOne)
  .post(bookingController.notAllowed)
  .put(adminAuth, bookingController.updateOne)
  .patch(adminAuth, bookingController.updateOne)
  .delete(adminAuth, bookingController.deleteOne);

export default router;
