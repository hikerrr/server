"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _Admin = _interopRequireDefault(require("../api/models/Admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// needed by babel for async and generator functions of ES6
var adminAuth = function adminAuth(req, res, next) {
  if (req.session.username) {
    _Admin["default"].findOne({
      username: req.session.username
    }).then(function (admin) {
      if (admin) {
        next();
      } else {
        req.session.destroy();
        res.redirect('/admin/login');
      }
    })["catch"](function (error) {
      req.session.destroy();
      res.redirect('/admin/login');
    });
  } else {
    console.log(1);
    res.redirect('/admin/login');
  }
};

var _default = adminAuth;
exports["default"] = _default;