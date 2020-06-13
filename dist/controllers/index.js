"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var indexController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res) {
    var apiUrl, destinations, tripStyles, blogs, upComingTours, data;
    return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            apiUrl = process.env.API_URL;
            _context.next = 4;
            return _axios["default"].get("".concat(apiUrl, "/destinations"));

          case 4:
            destinations = _context.sent;
            _context.next = 7;
            return _axios["default"].get("".concat(apiUrl, "/styles"));

          case 7:
            tripStyles = _context.sent;
            _context.next = 10;
            return _axios["default"].get("".concat(apiUrl, "/blogs"));

          case 10:
            blogs = _context.sent;
            _context.next = 13;
            return _axios["default"].get("".concat(apiUrl, "/tours"));

          case 13:
            upComingTours = _context.sent;
            data = {
              title: 'Home',
              navColor: 'transparent',
              destinations: destinations.data,
              tripStyles: tripStyles.data,
              blogs: blogs.data,
              upComingTours: upComingTours.data,
              imageUrl: process.env.AWS_IMAGE_URL
            };
            res.render('index', {
              data: data
            });
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            console.log("Error getting homepage: ".concat(_context.t0));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 18]]);
  }));

  return function indexController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = indexController;
exports["default"] = _default;