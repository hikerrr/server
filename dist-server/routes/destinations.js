"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _express = _interopRequireDefault(require("express"));

var _build = _interopRequireDefault(require("../build"));

var _admin = _interopRequireDefault(require("../authentication/admin"));

var _Destination = _interopRequireDefault(require("../models/Destination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  res.redirect('/#ds');
});
router.get('/:query', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res) {
    var destinations, destination, data;
    return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Destination["default"].find({});

          case 3:
            destinations = _context.sent;
            _context.next = 6;
            return _Destination["default"].findOne({
              linkName: req.params.query
            }).populate({
              path: 'cities',
              model: 'City'
            });

          case 6:
            destination = _context.sent;
            data = {
              destinations: destinations,
              destination: destination
            };
            res.render('destinations', {
              data: data
            });
            _context.next = 13;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/', _admin["default"], function (req, res) {
  var destination = new _Destination["default"](req.body);
  destination.save().then(function () {
    res.redirect('/admin/dashboard?notify=Data+Saved');
  })["catch"](function () {
    return res.redirect('/admin/dashboard?notify=Data+not+Saved');
  });
});
router.post('/patch/:query', _admin["default"], function (req, res) {
  if (!req.body.cities) req.body.cities = [];

  _Destination["default"].updateOne({
    linkName: req.params.query
  }, req.body, {
    $set: {
      cities: req.body.cities
    }
  }).then(function (updateResult) {
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
  _Destination["default"].deleteOne({
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
var _default = router;
exports["default"] = _default;