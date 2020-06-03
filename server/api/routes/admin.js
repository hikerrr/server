import express from 'express';
import adminController from '../controllers/admin';

const router = express.Router();

router
  .route('/')
  .get(adminController.getAll)
  .post(adminController.addOne)
  .put(adminController.notAllowed)
  .patch(adminController.notAllowed)
  .delete(adminController.deleteAll);

router
  .route('/:username')
  .get(adminController.getOne)
  .post(adminController.notAllowed)
  .put(adminController.updateOne)
  .patch(adminController.updateOne)
  .delete(adminController.deleteOne);

export default router;
