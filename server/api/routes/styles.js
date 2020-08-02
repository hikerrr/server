import express from 'express';
import styleController from '../controllers/style';
import adminAuth from '../../authentication/admin';

const router = express.Router();

router
  .route('/')
  .get(styleController.getAll)
  .post(adminAuth, styleController.addOne)
  .put(styleController.notAllowed)
  .patch(styleController.notAllowed)
  .delete(adminAuth, styleController.deleteAll);

router
  .route('/:linkName')
  .get(styleController.getOne)
  .post(styleController.notAllowed)
  .put(adminAuth, styleController.updateOne)
  .patch(adminAuth, styleController.updateOne)
  .delete(adminAuth, styleController.deleteOne);

export default router;
