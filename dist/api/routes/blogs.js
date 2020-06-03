"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _blog = _interopRequireDefault(require("../controllers/blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(_blog["default"].getAll).post(_blog["default"].addOne).put(_blog["default"].notAllowed).patch(_blog["default"].notAllowed)["delete"](_blog["default"].deleteAll);
router.route('/:linkName').get(_blog["default"].getOne).post(_blog["default"].notAllowed).put(_blog["default"].updateOne).patch(_blog["default"].updateOne)["delete"](_blog["default"].deleteOne);
var _default = router;
exports["default"] = _default;