import express from 'express';
import substyleController from '../controllers/substyle';

const router = express.Router();

router
  .route('/')
  .get(substyleController.getAll)
  .post(substyleController.addOne)
  .put(substyleController.notAllowed)
  .patch(substyleController.notAllowed)
  .delete(substyleController.deleteAll);

router
  .route('/:linkName')
  .get(substyleController.getOne)
  .post(substyleController.notAllowed)
  .put(substyleController.updateOne)
  .patch(substyleController.updateOne)
  .delete(substyleController.deleteOne);

export default router;
