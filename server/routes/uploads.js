import express from 'express';
import adminAuth from '../authentication/admin';

const router = express.Router();

router.post('/docs', adminAuth, (req, res) => {
  res.redirect('/admin/dashboard?notify=File+Uploaded');
});

router.post('/photos', adminAuth, (req, res) => {
  res.redirect('/admin/dashboard?notify=Files+Uploaded');
});

router.post('/video', adminAuth, (req, res) => {
  res.redirect('/admin/dashboard?notify=Files+Uploaded');
});

export default router;
