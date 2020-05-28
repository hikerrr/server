// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import express from 'express';
import adminAuth from '../authentication/admin';
import Tour from '../models/Tour';
import Booking from '../models/Booking';

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/destinations');
});

router.get('/:query', async (req, res) => {
  try {
    const trip = await Tour.findOne({linkName: req.params.query});

    const data = {
      trip,
    };

    res.render('trips', {data});
  } catch (Error) {
    throw Error;
  }
});


router.post('/', adminAuth, (req, res) => {
  const tour = new Tour(req.body);

  tour
    .save()
    .then(() => res.redirect('/admin/dashboard?notify=Data+Saved'))
    .catch(() => res.redirect('/admin/dashboard?notify=Data+not+Saved'));
});

router.post('/patch/:query', adminAuth, (req, res) => {
  Tour.updateOne({linkName: req.params.query}, req.body)
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
  Tour.deleteOne({linkName: req.params.query})
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

router.post('/booking/delete', adminAuth, (req, res) => {
  Booking.deleteOne({phone: req.body.phone})
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

router.post('/booking', (req, res) => {
  const booking = new Booking(req.body);

  booking
    .save()
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err));
});

export default router;
