const express = require('express');

const router = express.Router();
const {store} = require('../models/store');
/* GET home page. */
router.get('/', (req, res, next) => {

  const data =
  {
    title: 'Hikerr',
    heading: 'Travel With Us',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    store: store
  }

  res.render('index', {data:data});
});

module.exports = router;
