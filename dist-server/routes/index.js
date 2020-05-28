"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _express = _interopRequireDefault(require("express"));

var _Destination = _interopRequireDefault(require("../models/Destination"));

var _Style = _interopRequireDefault(require("../models/Style"));

var _Tour = _interopRequireDefault(require("../models/Tour"));

var _Blog = _interopRequireDefault(require("../models/Blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

router.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res) {
    var destinations, tripStyles, upComingTours, blogs, data;
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
            return _Style["default"].find({});

          case 6:
            tripStyles = _context.sent;
            _context.next = 9;
            return _Tour["default"].find({});

          case 9:
            upComingTours = _context.sent;
            _context.next = 12;
            return _Blog["default"].find({});

          case 12:
            blogs = _context.sent;
            data = {
              destinations: destinations,
              tripStyles: tripStyles,
              upComingTours: upComingTours,
              blogs: blogs
            };
            res.render('index', {
              data: data
            });
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.log("Error getting home page: ".concat(_context.t0));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;