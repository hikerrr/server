// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import express from 'express';
import Admin from '../api/models/Admin';
import adminAuth from '../authentication/admin';

const router = express.Router();

/* GET users listing. */
router.get('/', adminAuth, (req, res) => {
  res.redirect('/admin/dashboard');
});

router.get('/login', (req, res) => {
  res.render('admin/login', {
    data: {title: 'Login'},
    loginError: req.query.valid,
  });
});

router.get('/logout', adminAuth, (req, res) => {
  req.session.destroy();
  res.redirect('/admin/login');
});

router.post('/login', (req, res) => {
  Admin.authenticate(req.body.username, req.body.password)
    .then((isValid) => {
      if (isValid) {
        req.session.username = req.body.username;
        res.redirect('/admin/dashboard');
      } else {
        req.session.destroy();
        res.redirect('/admin/login?valid=false');
      }
    })
    .catch((error) => {
      res.redirect('/admin/login?valid=false');
    });
});

export default router;
