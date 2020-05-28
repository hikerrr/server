"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _express = _interopRequireDefault(require("express"));

var _Admin = _interopRequireDefault(require("../models/Admin"));

var _Destination = _interopRequireDefault(require("../models/Destination"));

var _Style = _interopRequireDefault(require("../models/Style"));

var _Blog = _interopRequireDefault(require("../models/Blog"));

var _Tour = _interopRequireDefault(require("../models/Tour"));

var _City = _interopRequireDefault(require("../models/City"));

var _Booking = _interopRequireDefault(require("../models/Booking"));

var _admin = _interopRequireDefault(require("../authentication/admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();
/* GET users listing. */


router.get('/', _admin["default"], function (req, res) {
  res.redirect('/admin/dashboard');
});
router.get('/dashboard', _admin["default"], /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res) {
    var admins, destinations, tripStyles, blogs, tours, cities, bookings, data;
    return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Admin["default"].find({});

          case 3:
            admins = _context.sent;
            _context.next = 6;
            return _Destination["default"].find({}).populate({
              path: 'cities',
              model: 'City'
            });

          case 6:
            destinations = _context.sent;
            _context.next = 9;
            return _Style["default"].find({});

          case 9:
            tripStyles = _context.sent;
            _context.next = 12;
            return _Blog["default"].find({});

          case 12:
            blogs = _context.sent;
            _context.next = 15;
            return _Tour["default"].find({});

          case 15:
            tours = _context.sent;
            _context.next = 18;
            return _City["default"].find({});

          case 18:
            cities = _context.sent;
            _context.next = 21;
            return _Booking["default"].find({});

          case 21:
            bookings = _context.sent;
            data = {
              admins: admins,
              destinations: destinations,
              tripStyles: tripStyles,
              blogs: blogs,
              tours: tours,
              cities: cities,
              bookings: bookings
            };
            res.render('admin/dashboard', {
              data: data,
              notify: req.query.notify
            });
            _context.next = 28;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](0);

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 26]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/login', function (req, res) {
  res.render('admin/login', {
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
router.post('/', _admin["default"], function (req, res) {
  var admin = new _Admin["default"](req.body);
  admin.save().then(function () {
    return res.redirect('/admin/dashboard?notify=Data+Saved');
  })["catch"](function () {
    return res.redirect('/admin/dashboard?notify=Data+not+Saved');
  });
});
router.post('/patch/:query', _admin["default"], function (req, res) {
  _Admin["default"].updateOne({
    username: req.params.query
  }, req.body).then(function (updateResult) {
    if (updateResult.nModified) {
      res.redirect('/admin/dashboard?notify=Data+Updated');
    } else {
      res.redirect('/admin/dashboard?notify=Data+not+Updated');
    }
  })["catch"](function () {
    res.redirect('/admin/dashboard?notify=Data+not+Updated');
  });
});
router.post('/delete/:query', _admin["default"], function (req, res) {
  _Admin["default"].deleteOne({
    username: req.params.query
  }).then(function (deleteResult) {
    if (deleteResult.deletedCount) {
      res.redirect('/admin/dashboard?notify=Data+Deleted');
    } else {
      res.redirect('/admin/dashboard?notify=Data+not+Deleted');
    }
  })["catch"](function () {
    res.redirect('/admin/dashboard?notify=Data+not+Deleted');
  });
});
var _default = router;
exports["default"] = _default;