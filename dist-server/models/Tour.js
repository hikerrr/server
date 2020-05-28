"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TourSchema = new _mongoose["default"].Schema({
  linkName: String,
  imageName: String,
  imageCaption: String,
  startDate: {
    type: Date,
    "default": Date.now
  },
  heading: String,
  caption: String,
  priceMin: Number,
  priceMax: Number,
  durationMin: Number,
  durationMax: Number,
  itinerary: [[{
    type: String
  }]]
});

var _default = _mongoose["default"].model('Tour', TourSchema);

exports["default"] = _default;