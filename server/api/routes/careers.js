import express from 'express';
import careerController from '../controllers/career';

const router = express.Router();

router
  .route('/')
  .get(careerController.getAll)
  .post(careerController.addOne)
  .put(careerController.notAllowed)
  .patch(careerController.notAllowed)
  .delete(careerController.deleteAll);

router
  .route('/:linkName')
  .get(careerController.getOne)
  .post(careerController.notAllowed)
  .put(careerController.updateOne)
  .patch(careerController.updateOne)
  .delete(careerController.deleteOne);

export default router;
