import express from 'express';
import destinationController from '../controllers/destination';
import adminAuth from '../../authentication/admin';

const router = express.Router();

router
  .route('/')
  .get(destinationController.getAll)
  .post(adminAuth, destinationController.addOne)
  .put(destinationController.notAllowed)
  .patch(destinationController.notAllowed)
  .delete(adminAuth, destinationController.deleteAll);

router
  .route('/:linkName')
  .get(destinationController.getOne)
  .post(destinationController.notAllowed)
  .put(adminAuth, destinationController.updateOne)
  .patch(adminAuth, destinationController.updateOne)
  .delete(adminAuth, destinationController.deleteOne);

export default router;
