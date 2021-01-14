import express from 'express';
import blogController from '../controllers/blog';
import adminAuth from '../../authentication/admin';

const router = express.Router();

router
  .route('/')
  .get(blogController.getAll)
  .post(adminAuth, blogController.addOne)
  .put(blogController.notAllowed)
  .patch(blogController.notAllowed)
  .delete(adminAuth, blogController.deleteAll);

router
  .route('/:linkName')
  .get(blogController.getOne)
  .post(blogController.notAllowed)
  .put(adminAuth, blogController.updateOne)
  .patch(adminAuth, blogController.updateOne)
  .delete(adminAuth, blogController.deleteOne);

export default router;
