"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _city = _interopRequireDefault(require("../controllers/city"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(_city["default"].getAll).post(_city["default"].addOne).put(_city["default"].notAllowed).patch(_city["default"].notAllowed)["delete"](_city["default"].deleteAll);
router.route('/:linkName').get(_city["default"].getOne).post(_city["default"].notAllowed).put(_city["default"].updateOne).patch(_city["default"].updateOne)["delete"](_city["default"].deleteOne);
var _default = router;
exports["default"] = _default;