import express from 'express';
import styleController from '../controllers/style';

const router = express.Router();

router
  .route('/')
  .get(styleController.getAll)
  .post(styleController.addOne)
  .put(styleController.notAllowed)
  .patch(styleController.notAllowed)
  .delete(styleController.deleteAll);

router
  .route('/:linkName')
  .get(styleController.getOne)
  .post(styleController.notAllowed)
  .put(styleController.updateOne)
  .patch(styleController.updateOne)
  .delete(styleController.deleteOne);

export default router;
