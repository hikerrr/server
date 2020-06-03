"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _destination = _interopRequireDefault(require("../controllers/destination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(_destination["default"].listAll);
router.route('/:linkName').get(_destination["default"].listOne);
var _default = router;
exports["default"] = _default;