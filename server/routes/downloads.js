// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';

import express from 'express';
import {parse} from 'json2csv';
import adminAuth from '../authentication/admin';

const router = express.Router();

router.post('/csv', adminAuth, (req, res) => {
  const fields = Object.keys(req.body);

  const data = [];

  for (let i = 0; i < req.body[fields[0]].length; i++) {
    const entry = {};
    for (let j = 0; j < fields.length; j += 1) {
      entry[fields[j]] = req.body[fields[j]][i];
    }
    data.push(entry);
  }

  res.setHeader('Content-disposition', 'attachment; filename=bookings.csv');
  res.set('Content-Type', 'text/csv');
  res.status(200).send(parse(data, {fields}));
});

export default router;
