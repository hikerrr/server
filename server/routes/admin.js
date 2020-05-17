const express = require('express');
const adminAuth = require('../authentication/admin');

const router = express.Router();

/* GET users listing. */
router.get('/', adminAuth, (req, res, next) => {
  res.send(`You visited this page ${req.session.visits} times.`);
});

module.exports = router;
