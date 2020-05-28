"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CitySchema = new _mongoose["default"].Schema({
  linkName: String,
  imageName: String,
  imageCaption: String,
  heading: String,
  caption: String,
  tours: [{
    type: _mongoose["default"].Types.ObjectId,
    ref: 'Tour'
  }]
});

var _default = _mongoose["default"].model('City', CitySchema);

exports["default"] = _default;