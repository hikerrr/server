import express from 'express';
import substyleController from '../controllers/substyle';

const router = express.Router();

router.route('/').get(substyleController.listAll);

router.route('/:linkName').get(substyleController.listOne);

export default router;
