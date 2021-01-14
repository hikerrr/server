import express from 'express';
import substyleController from '../controllers/substyle';
import adminAuth from '../../authentication/admin';

const router = express.Router();

router
  .route('/')
  .get(substyleController.getAll)
  .post(adminAuth, substyleController.addOne)
  .put(substyleController.notAllowed)
  .patch(substyleController.notAllowed)
  .delete(adminAuth, substyleController.deleteAll);

router
  .route('/:linkName')
  .get(substyleController.getOne)
  .post(substyleController.notAllowed)
  .put(adminAuth, substyleController.updateOne)
  .patch(adminAuth, substyleController.updateOne)
  .delete(adminAuth, substyleController.deleteOne);

export default router;
