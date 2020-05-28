// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import express from 'express';
import adminAuth from '../authentication/admin';
import City from '../models/City';

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/');
});

router.get('/:query', async (req, res) => {
  try {
    const city = await City.findOne({linkName: req.params.query}).populate({
      path: 'tours',
      model: 'Tour',
    });

    const data = {
      city,
    };

    res.render('tours', {data});
  } catch (Error) {}
});

router.post('/', adminAuth, (req, res) => {
  const city = new City(req.body);

  city
    .save()
    .then(() => res.redirect('/admin/dashboard?notify=Data+Saved'))
    .catch(() => res.redirect('/admin/dashboard?notify=Data+not+Saved'));
});

router.post('/patch/:query', adminAuth, (req, res) => {
  if (!req.body.tours) req.body.tours = [];

  City.updateOne({linkName: req.params.query}, req.body, {
    $set: {tours: req.body.tours},
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
  City.deleteOne({linkName: req.params.query})
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
