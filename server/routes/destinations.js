const express = require('express');
const {store} = require('../models/store');

const router = express.Router();

router.get('/', (req,res) => {

  const data = {
    query: false,
    store: store
  };

  res.render('destinations',{data:data});

});

router.get('/:query', (req,res) => {


  const data = {
    query: req.params.query,
    store:store
  };

  res.render('destinations',{data:data})

});



module.exports = router;
