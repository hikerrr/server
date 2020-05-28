"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _express = _interopRequireDefault(require("express"));

var _admin = _interopRequireDefault(require("../authentication/admin"));

var _Tour = _interopRequireDefault(require("../models/Tour"));

var _Booking = _interopRequireDefault(require("../models/Booking"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  res.redirect('/destinations');
});
router.get('/:query', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res) {
    var trip, data;
    return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Tour["default"].findOne({
              linkName: req.params.query
            });

          case 3:
            trip = _context.sent;
            data = {
              trip: trip
            };
            res.render('trips', {
              data: data
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/', _admin["default"], function (req, res) {
  var tour = new _Tour["default"](req.body);
  tour.save().then(function () {
    return res.redirect('/admin/dashboard?notify=Data+Saved');
  })["catch"](function () {
    return res.redirect('/admin/dashboard?notify=Data+not+Saved');
  });
});
router.post('/patch/:query', _admin["default"], function (req, res) {
  _Tour["default"].updateOne({
    linkName: req.params.query
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
  _Tour["default"].deleteOne({
    linkName: req.params.query
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
router.post('/booking/delete', _admin["default"], function (req, res) {
  _Booking["default"].deleteOne({
    phone: req.body.phone
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
router.post('/booking', function (req, res) {
  var booking = new _Booking["default"](req.body);
  booking.save().then(function () {
    return res.redirect('/');
  })["catch"](function (err) {
    return console.log(err);
  });
});
var _default = router;
exports["default"] = _default;