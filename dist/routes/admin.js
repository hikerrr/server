"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _express = _interopRequireDefault(require("express"));

var _Admin = _interopRequireDefault(require("../api/models/Admin"));

var _admin = _interopRequireDefault(require("../authentication/admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// needed by babel for async and generator functions of ES6
var router = _express["default"].Router();
/* GET users listing. */


router.get('/', _admin["default"], function (req, res) {
  res.redirect('/admin/dashboard');
});
router.get('/login', function (req, res) {
  res.render('admin/login', {
    data: {
      title: 'Login'
    },
    loginError: req.query.valid
  });
});
router.get('/logout', _admin["default"], function (req, res) {
  req.session.destroy();
  res.redirect('/admin/login');
});
router.post('/login', function (req, res) {
  _Admin["default"].authenticate(req.body.username, req.body.password).then(function (isValid) {
    if (isValid) {
      req.session.username = req.body.username;
      res.redirect('/admin/dashboard');
    } else {
      req.session.destroy();
      res.redirect('/admin/login?valid=false');
    }
  })["catch"](function (error) {
    res.redirect('/admin/login?valid=false');
  });
});
var _default = router;
exports["default"] = _default;