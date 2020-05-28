"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyleSchema = new _mongoose["default"].Schema({
  linkName: String,
  imageName: String,
  imageCaption: String,
  heading: String,
  caption: String,
  cities: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'City'
  }],
  tours: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Tour'
  }]
});

var _default = _mongoose["default"].model('Style', StyleSchema);

exports["default"] = _default;