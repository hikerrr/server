const express = require('express');

const router = express.Router();

const {store} = require('../models/store');

router.get('/', (req,res) => {
  res.redirect('/#ts');
});

router.get('/:style', (req,res) => {

  const data = {
    query:req.params.style,
    store:store
  }

  console.log(data.store);

  res.render('styles',{data:data});

});

module.exports = router;
