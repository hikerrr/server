const express = require('express');

const router = express.Router();

const store = require('../models/store');

router.get('/', (req,res) => {
  res.redirect('/destinations');
});

router.get('/:query', (req,res) => {
  res.redirect(`/tours/${req.params.query}`);
});


router.get('/:query/:tripNumber', (req,res) => {

  const data = {
    store: store
  };

  res.render('trips',{data:data});

});

module.exports = router;
