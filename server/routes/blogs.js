// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';

import express from 'express';
import adminAuth from '../authentication/admin';
import Blog from '../models/Blog';

const router = express.Router();


router.get('/', (req, res) => {
  res.redirect('/#blogs');
});

router.get('/:query', async (req, res) => {
  try {
    const destinations = await Destination.find({});
    const destination = await Destination.findOne({
      linkName: req.params.query,
    }).populate({path: 'cities', model: 'Destination'});

    const data = {
      destinations,
      destination,
    };

    res.render('destinations', {data});
  } catch (Error) {}
});

router.post('/', adminAuth, (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then(() => res.redirect('/admin/dashboard?notify=Data+Saved'))
    .catch(() => res.redirect('/admin/dashboard?notify=Data+not+Saved'));
});

router.post('/patch/:query', adminAuth, (req, res) => {
  Blog.updateOne({linkName: req.params.query}, req.body)
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
  Blog.deleteOne({linkName: req.params.query})
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
