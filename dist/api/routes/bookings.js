"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _booking = _interopRequireDefault(require("../controllers/booking"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(_booking["default"].getAll).post(_booking["default"].addOne).put(_booking["default"].notAllowed).patch(_booking["default"].notAllowed)["delete"](_booking["default"].deleteAll);
router.route('/:_id').get(_booking["default"].getOne).post(_booking["default"].notAllowed).put(_booking["default"].updateOne).patch(_booking["default"].updateOne)["delete"](_booking["default"].deleteOne);
var _default = router;
exports["default"] = _default;