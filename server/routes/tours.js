const express = require('express');

const router = express.Router();

const {store} = require('../models/store');

function findCity(query) {
  let city = {};

  let keys = Object.keys(store.cities);

  for(let i = 0; i < keys.length; i++)
  {
    let current = store.cities[keys[i]];

    for (let j = 0; j < current.length; j++)
    {
      let name = current[j].heading.toLowerCase().replace(' ','-');
      if(name == query) {
        city = current[j];
        return city;
      }
    }
  }

  return city;
}

router.get('/', (req,res) => {

  res.redirect('/');

});

router.get('/:query', (req,res) => {

  let city = findCity(req.params.query);

  const data = {
    query:req.params.query,
    city:city,
    store:store
  }

  res.render('tours', {data:data});

});

module.exports = router;
