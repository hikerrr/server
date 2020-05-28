"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _admin = _interopRequireDefault(require("../authentication/admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/docs', _admin["default"], function (req, res) {
  res.redirect('/admin/dashboard?notify=File+Uploaded');
});
router.post('/photos', _admin["default"], function (req, res) {
  res.redirect('/admin/dashboard?notify=Files+Uploaded');
});
router.post('/video', _admin["default"], function (req, res) {
  res.redirect('/admin/dashboard?notify=Files+Uploaded');
});
var _default = router;
exports["default"] = _default;