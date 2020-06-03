"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _admin = _interopRequireDefault(require("../controllers/admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(_admin["default"].getAll).post(_admin["default"].addOne).put(_admin["default"].notAllowed).patch(_admin["default"].notAllowed)["delete"](_admin["default"].deleteAll);
router.route('/:username').get(_admin["default"].getOne).post(_admin["default"].notAllowed).put(_admin["default"].updateOne).patch(_admin["default"].updateOne)["delete"](_admin["default"].deleteOne);
var _default = router;
exports["default"] = _default;