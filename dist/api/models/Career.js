"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CareerSchema = new _mongoose["default"].Schema({
  name: String,
  experience: String,
  functionalAreas: String,
  description: String,
  mailSubject: String
});

var _default = _mongoose["default"].model('Career', CareerSchema);

exports["default"] = _default;