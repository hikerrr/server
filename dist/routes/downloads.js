"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _express = _interopRequireDefault(require("express"));

var _json2csv = require("json2csv");

var _admin = _interopRequireDefault(require("../authentication/admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// needed by babel for async and generator functions of ES6
var router = _express["default"].Router();

router.post('/csv', _admin["default"], function (req, res) {
  var fields = Object.keys(req.body);
  var data = [];

  for (var i = 0; i < req.body[fields[0]].length; i++) {
    var entry = {};

    for (var j = 0; j < fields.length; j += 1) {
      entry[fields[j]] = req.body[fields[j]][i];
    }

    data.push(entry);
  }

  res.setHeader('Content-disposition', 'attachment; filename=bookings.csv');
  res.set('Content-Type', 'text/csv');
  res.status(200).send((0, _json2csv.parse)(data, {
    fields: fields
  }));
});
var _default = router;
exports["default"] = _default;