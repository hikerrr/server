"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DestinationSchema = new _mongoose["default"].Schema({
  linkName: String,
  imageName: String,
  imageCaption: String,
  heading: String,
  caption: String,
  cities: [{
    type: _mongoose["default"].Types.ObjectId,
    ref: 'City'
  }]
});

var _default = _mongoose["default"].model('Destination', DestinationSchema);

exports["default"] = _default;