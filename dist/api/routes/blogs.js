"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _blog = _interopRequireDefault(require("../controllers/blog"));

var _admin = _interopRequireDefault(require("../../authentication/admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route('/').get(_blog["default"].getAll).post(_admin["default"], _blog["default"].addOne).put(_blog["default"].notAllowed).patch(_blog["default"].notAllowed)["delete"](_admin["default"], _blog["default"].deleteAll);
router.route('/:linkName').get(_blog["default"].getOne).post(_blog["default"].notAllowed).put(_admin["default"], _blog["default"].updateOne).patch(_admin["default"], _blog["default"].updateOne)["delete"](_admin["default"], _blog["default"].deleteOne);
var _default = router;
exports["default"] = _default;