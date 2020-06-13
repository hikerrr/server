"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _tour = _interopRequireDefault(require("../controllers/tour"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(_tour["default"].getAll).post(_tour["default"].addOne).put(_tour["default"].notAllowed).patch(_tour["default"].notAllowed)["delete"](_tour["default"].deleteAll);
router.route('/:linkName').get(_tour["default"].getOne).post(_tour["default"].notAllowed).put(_tour["default"].updateOne).patch(_tour["default"].updateOne)["delete"](_tour["default"].deleteOne);
router.route('/:linkName/bookings').get(_tour["default"].getAllBookings);
var _default = router;
exports["default"] = _default;