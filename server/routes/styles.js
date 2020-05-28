// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import express from 'express';
import adminAuth from '../authentication/admin';
import Style from '../models/Style';

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/#ts');
});

router.get('/:query', async (req, res) => {
  try {
    const tripStyle = await Style.findOne({linkName: req.params.query})
      .populate({path: 'cities', model: 'City'})
      .populate({path: 'tours', model: 'Tour'});

    const data = {
      tripStyle,
    };

    res.render('styles', {data});
  } catch (Error) {}
});

router.post('/', adminAuth, (req, res) => {
  const style = new Style(req.body);

  style
    .save()
    .then(() => res.redirect('/admin/dashboard?notify=Data+Saved'))
    .catch(() => res.redirect('/admin/dashboard?notify=Data+not+Saved'));
});

router.post('/patch/:query', adminAuth, (req, res) => {
  if (!req.body.tours) req.body.tours = [];
  if (!req.body.cities) req.body.cities = [];

  Style.updateOne({linkName: req.params.query}, req.body, {
    $set: {tours: req.body.tours, cities: req.body.cities},
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
  Style.deleteOne({linkName: req.params.query})
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
