import express from 'express';
import termController from '../controllers/term';

const router = express.Router();

router.route('/').get(termController.listAll);

export default router;
