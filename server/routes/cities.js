import express from 'express';
import cityController from '../controllers/city';

const router = express.Router();

router.route('/').get(cityController.listAll);

router.route('/:linkName').get(cityController.listOne);

export default router;
