"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BookingSchema = new _mongoose["default"].Schema({
  title: String,
  name: String,
  email: String,
  phone: String,
  from: Date
});

var _default = _mongoose["default"].model('Booking', BookingSchema);

exports["default"] = _default;