"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var listAll = function listAll(req, res) {
  res.redirect('/#ds');
};

var listOne = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res) {
    var apiUrl, destResponse, destination, response, styles, tripStyles, _iterator, _step, style, _iterator2, _step2, _loop, _iterator3, _step3, substyle, _iterator4, _step4, _loop2, data;

    return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            apiUrl = process.env.API_URL;
            _context.next = 4;
            return _axios["default"].get("".concat(apiUrl, "/destinations/").concat(req.params.linkName));

          case 4:
            destResponse = _context.sent;
            destination = destResponse.data;
            _context.next = 8;
            return _axios["default"].get("".concat(apiUrl, "/styles"));

          case 8:
            response = _context.sent;
            styles = response.data;
            tripStyles = {};
            _iterator = _createForOfIteratorHelper(styles);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                style = _step.value;
                _iterator2 = _createForOfIteratorHelper(style.tours);

                try {
                  _loop = function _loop() {
                    var tour = _step2.value;

                    if (destination.tours.some(function (t) {
                      return t._id === tour._id;
                    })) {
                      if (tripStyles[style.heading]) {
                        tripStyles[style.heading].tours.push(tour);
                      } else {
                        tripStyles[style.heading] = [tour];
                      }
                    }
                  };

                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    _loop();
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                _iterator3 = _createForOfIteratorHelper(style.substyles);

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    substyle = _step3.value;
                    _iterator4 = _createForOfIteratorHelper(substyle.tours);

                    try {
                      _loop2 = function _loop2() {
                        var tour = _step4.value;

                        if (destination.tours.some(function (t) {
                          return t._id === tour._id;
                        })) {
                          if (tripStyles[style.heading]) {
                            tripStyles[style.heading].tours.push(tour);
                          } else {
                            tripStyles[style.heading] = [tour];
                          }
                        }
                      };

                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                        _loop2();
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            data = {
              title: 'Destinations',
              navColor: 'transparent',
              destination: destination,
              tripStyles: tripStyles,
              imageUrl: process.env.AWS_IMAGE_URL
            };
            res.render('destinations', {
              data: data
            });
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
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