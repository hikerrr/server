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

var listAll = function listAll(req, res) {
  res.redirect('/#ds');
};

var listOne = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res) {
    var apiUrl, destination, destinations, data;
    return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            apiUrl = process.env.API_URL;
            _context.next = 4;
            return _axios["default"].get("".concat(apiUrl, "/destinations/").concat(req.params.linkName));

          case 4:
            destination = _context.sent;
            _context.next = 7;
            return _axios["default"].get("".concat(apiUrl, "/destinations"));

          case 7:
            destinations = _context.sent;
            data = {
              title: 'Destinations',
              navColor: 'transparent',
              destination: destination.data,
              destinations: destinations.data
            };
            res.render('destinations', {
              data: data
            });
            _context.next = 14;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function listOne(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  listOne: listOne,
  listAll: listAll
};
exports["default"] = _default;