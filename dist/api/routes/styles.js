"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _style = _interopRequireDefault(require("../controllers/style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(_style["default"].getAll).post(_style["default"].addOne).put(_style["default"].notAllowed).patch(_style["default"].notAllowed)["delete"](_style["default"].deleteAll);
router.route('/:linkName').get(_style["default"].getOne).post(_style["default"].notAllowed).put(_style["default"].updateOne).patch(_style["default"].updateOne)["delete"](_style["default"].deleteOne);
var _default = router;
exports["default"] = _default;