import express from 'express';
import destinationController from '../controllers/destination';

const router = express.Router();

router
  .route('/')
  .get(destinationController.getAll)
  .post(destinationController.addOne)
  .put(destinationController.notAllowed)
  .patch(destinationController.notAllowed)
  .delete(destinationController.deleteAll);

router
  .route('/:linkName')
  .get(destinationController.getOne)
  .post(destinationController.notAllowed)
  .put(destinationController.updateOne)
  .patch(destinationController.updateOne)
  .delete(destinationController.deleteOne);

export default router;
