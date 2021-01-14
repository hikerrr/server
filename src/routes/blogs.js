import express from 'express';
import blogController from '../controllers/blog';

const router = express.Router();

router.route('/').get(blogController.listAll);

router.route('/:linkName').get(blogController.listOne);

export default router;
