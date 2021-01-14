import express from 'express';
import adminController from '../controllers/admin';
import adminAuth from '../../authentication/admin';

const router = express.Router();

router
  .route('/')
  .get(adminAuth, adminController.getAll)
  .post(adminAuth, adminController.addOne)
  .put(adminController.notAllowed)
  .patch(adminController.notAllowed)
  .delete(adminAuth, adminController.deleteAll);

router
  .route('/:username')
  .get(adminAuth, adminController.getOne)
  .post(adminController.notAllowed)
  .put(adminAuth, adminController.updateOne)
  .patch(adminAuth, adminController.updateOne)
  .delete(adminAuth, adminController.deleteOne);

export default router;
