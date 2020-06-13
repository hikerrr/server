"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _upload = _interopRequireDefault(require("../controllers/upload"));

var _admin = _interopRequireDefault(require("../authentication/admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/photos', _upload["default"].uploadPhotos);
var _default = router;
exports["default"] = _default;