"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BlogSchema = new _mongoose["default"].Schema({
  linkName: String,
  author: String,
  title: String,
  content: String,
  caption: String,
  imageName: String,
  imageCaption: String,
  readTime: Number,
  writingDate: {
    type: Date,
    "default": Date.now
  }
});

var _default = _mongoose["default"].model('Blog', BlogSchema);

exports["default"] = _default;