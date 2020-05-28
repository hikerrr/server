// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import express from 'express';
import build from '../build';
import adminAuth from '../authentication/admin';
import Destination from '../models/Destination';

const router = express.Router();


router.get('/', (req, res) => {
  res.redirect('/#ds');
});

router.get('/:query', async (req, res) => {
  try {
    const destinations = await Destination.find({});
    const destination = await Destination.findOne({
      linkName: req.params.query,
    }).populate({path: 'cities', model: 'City'});

    const data = {
      destinations,
      destination,
    };

    res.render('destinations', {data});
  } catch (Error) {}
});

router.post('/', adminAuth, (req, res) => {
  const destination = new Destination(req.body);

  destination
    .save()
    .then(() => {
      res.redirect('/admin/dashboard?notify=Data+Saved');
    })
    .catch(() => res.redirect('/admin/dashboard?notify=Data+not+Saved'));
});

router.post('/patch/:query', adminAuth, (req, res) => {
  if (!req.body.cities) req.body.cities = [];

  Destination.updateOne({linkName: req.params.query}, req.body, {
    $set: {cities: req.body.cities},
  })
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
  Destination.deleteOne({linkName: req.params.query})
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
