// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import express from 'express';
import Destination from '../models/Destination';
import Style from '../models/Style';
import Tour from '../models/Tour';
import Blog from '../models/Blog';

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find({});
    const tripStyles = await Style.find({});
    const upComingTours = await Tour.find({});
    const blogs = await Blog.find({});

    const data = {
      destinations,
      tripStyles,
      upComingTours,
      blogs,
    };

    res.render('index', {data});
  } catch (Error) {
    console.log(`Error getting home page: ${Error}`);
  }
});

export default router;
