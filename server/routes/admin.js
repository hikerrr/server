// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';

import express from 'express';
import Admin from '../models/Admin';
import Destination from '../models/Destination';
import Style from '../models/Style';
import Blog from '../models/Blog';
import Tour from '../models/Tour';
import City from '../models/City';
import Booking from '../models/Booking';
import adminAuth from '../authentication/admin';

const router = express.Router();

/* GET users listing. */
router.get('/', adminAuth, (req, res) => {
  res.redirect('/admin/dashboard');
});

router.get('/dashboard', adminAuth, async (req, res) => {
  try {
    const admins = await Admin.find({});
    const destinations = await Destination.find({}).populate({
      path: 'cities',
      model: 'City',
    });
    const tripStyles = await Style.find({});
    const blogs = await Blog.find({});
    const tours = await Tour.find({});
    const cities = await City.find({});
    const bookings = await Booking.find({});

    const data = {
      admins,
      destinations,
      tripStyles,
      blogs,
      tours,
      cities,
      bookings,
    };

    res.render('admin/dashboard', {data, notify: req.query.notify});
  } catch (Error) {}
});

router.get('/login', (req, res) => {
  res.render('admin/login', {loginError: req.query.valid});
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

router.post('/', adminAuth, (req, res) => {
  const admin = new Admin(req.body);

  admin
    .save()
    .then(() => res.redirect('/admin/dashboard?notify=Data+Saved'))
    .catch(() => res.redirect('/admin/dashboard?notify=Data+not+Saved'));
});

router.post('/patch/:query', adminAuth, (req, res) => {
  Admin.updateOne({username: req.params.query}, req.body)
    .then((updateResult) => {
      if (updateResult.nModified) {
        res.redirect('/admin/dashboard?notify=Data+Updated');
      } else {
        res.redirect('/admin/dashboard?notify=Data+not+Updated');
      }
    })
    .catch(() => {
      res.redirect('/admin/dashboard?notify=Data+not+Updated');
    });
});

router.post('/delete/:query', adminAuth, (req, res) => {
  Admin.deleteOne({username: req.params.query})
    .then((deleteResult) => {
      if (deleteResult.deletedCount) {
        res.redirect('/admin/dashboard?notify=Data+Deleted');
      } else {
        res.redirect('/admin/dashboard?notify=Data+not+Deleted');
      }
    })
    .catch(() => {
      res.redirect('/admin/dashboard?notify=Data+not+Deleted');
    });
});

export default router;
