import express from 'express';
import contactController from '../controllers/contact';

const router = express.Router();

router.route('/').get(contactController.listAll);

export default router;
