import express from 'express';
import blogController from '../controllers/blog';

const router = express.Router();

router
  .route('/')
  .get(blogController.getAll)
  .post(blogController.addOne)
  .put(blogController.notAllowed)
  .patch(blogController.notAllowed)
  .delete(blogController.deleteAll);

router
  .route('/:linkName')
  .get(blogController.getOne)
  .post(blogController.notAllowed)
  .put(blogController.updateOne)
  .patch(blogController.updateOne)
  .delete(blogController.deleteOne);

export default router;
