import express from 'express';
import styleController from '../controllers/style';

const router = express.Router();

router.route('/').get(styleController.listAll);

router.route('/:linkName').get(styleController.listOne);

export default router;
