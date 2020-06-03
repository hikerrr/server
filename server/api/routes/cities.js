import express from 'express';
import cityController from '../controllers/city';

const router = express.Router();

router
  .route('/')
  .get(cityController.getAll)
  .post(cityController.addOne)
  .put(cityController.notAllowed)
  .patch(cityController.notAllowed)
  .delete(cityController.deleteAll);

router
  .route('/:linkName')
  .get(cityController.getOne)
  .post(cityController.notAllowed)
  .put(cityController.updateOne)
  .patch(cityController.updateOne)
  .delete(cityController.deleteOne);

export default router;
