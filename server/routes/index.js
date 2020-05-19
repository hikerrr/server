const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {

  let tripStyles = [
    {
      title:'Historical',
      heading:'Historical Sites',
      src:'/assets/images/historical.jpg',
      alt:'Photo of a historical site',
      caption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

    },
    {
      title:'Family',
      heading:'Family',
      src:'/assets/images/family.jpg',
      alt:'Photo of college students',
      caption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

    },
  ]


  let trips = [
    {
      src:'/assets/images/naran.jpg',
      alt:'Photo of Naran',
      caption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',

    },
    {
      src:'/assets/images/religious.jpg',
      alt:'Photo of Naran',
      caption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',

    },
  ]

  res.render('index', {title: 'Hikerr',heading:'Travel With Us',trips:trips,tripStyles:tripStyles});
});

module.exports = router;
