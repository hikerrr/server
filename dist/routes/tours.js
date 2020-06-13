"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _tour = _interopRequireDefault(require("../controllers/tour"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(_tour["default"].listAll);
router.route('/:linkName').get(_tour["default"].listOne);
router.post('/booking', _tour["default"].bookTour);
var _default = router;
exports["default"] = _default;