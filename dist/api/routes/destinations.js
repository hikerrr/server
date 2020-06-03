"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _destination = _interopRequireDefault(require("../controllers/destination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(_destination["default"].getAll).post(_destination["default"].addOne).put(_destination["default"].notAllowed).patch(_destination["default"].notAllowed)["delete"](_destination["default"].deleteAll);
router.route('/:linkName').get(_destination["default"].getOne).post(_destination["default"].notAllowed).put(_destination["default"].updateOne).patch(_destination["default"].updateOne)["delete"](_destination["default"].deleteOne);
var _default = router;
exports["default"] = _default;