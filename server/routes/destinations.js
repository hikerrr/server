import express from 'express';
import destinationController from '../controllers/destination';

const router = express.Router();

router.route('/').get(destinationController.listAll);

router.route('/:linkName').get(destinationController.listOne);

export default router;
