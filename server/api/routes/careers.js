import express from 'express';
import careerController from '../controllers/career';
import adminAuth from '../../authentication/admin';

const router = express.Router();

router
  .route('/')
  .get(careerController.getAll)
  .post(adminAuth, careerController.addOne)
  .put(careerController.notAllowed)
  .patch(careerController.notAllowed)
  .delete(adminAuth, careerController.deleteAll);

router
  .route('/:linkName')
  .get(careerController.getOne)
  .post(careerController.notAllowed)
  .put(adminAuth, careerController.updateOne)
  .patch(adminAuth, careerController.updateOne)
  .delete(adminAuth, careerController.deleteOne);

export default router;
