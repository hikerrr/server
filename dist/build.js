"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _pug = _interopRequireDefault(require("pug"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _Destination = _interopRequireDefault(require("./models/Destination"));

var _Style = _interopRequireDefault(require("./models/Style"));

var _Tour = _interopRequireDefault(require("./models/Tour"));

var _Blog = _interopRequireDefault(require("./models/Blog"));

var _City = _interopRequireDefault(require("./models/City"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var updateDests = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee2(destName) {
    var destPath, destinations, destination;
    return _regeneratorRuntime["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // create files at dest path
            destPath = _path["default"].join(__dirname, '../public', 'destinations', destName);
            _context2.next = 3;
            return _Destination["default"].find({});

          case 3:
            destinations = _context2.sent;
            _context2.next = 6;
            return _Destination["default"].find({
              linkName: destName
            }).populate({
              path: 'cities',
              model: 'City'
            });

          case 6:
            destination = _context2.sent;

            if (!destination) {
              _fs["default"].rmdir(destPath, function (err) {
                if (err) throw err;
                console.log("Directory ".concat(destName, " removed."));
              });
            }

            _fs["default"].mkdir(destPath, function (err) {
              if (err.code != 'EEXIST') throw err;

              _fs["default"].open(_path["default"].join(destPath, 'index.html'), 'w', /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(err, file) {
                  var data, destFunction;
                  return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          data = {
                            destinations: destinations,
                            destination: destination
                          };
                          destFunction = _pug["default"].compileFile(_path["default"].join(__dirname, '../views', 'destinations.pug'));

                          _fs["default"].write(file, destFunction({
                            data: data
                          }), function (err) {
                            if (err) throw err;
                            console.log("".concat(dest.linkName, ".html build done!"));

                            _fs["default"].close(file, function (err) {
                              if (err) throw err;
                            });
                          });

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2, _x3) {
                  return _ref2.apply(this, arguments);
                };
              }());
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateDests(_x) {
    return _ref.apply(this, arguments);
  };
}();

var updateCities = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee4() {
    var tourPath, cities;
    return _regeneratorRuntime["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // create files at dest path
            tourPath = _path["default"].join(__dirname, '../public', 'tours');
            _context4.next = 3;
            return _City["default"].find({});

          case 3:
            cities = _context4.sent;
            cities.forEach(function (tour) {
              _fs["default"].mkdir(_path["default"].join(tourPath, tour.linkName), function (err) {
                if (err.code != 'EEXIST') throw err;

                _fs["default"].open(_path["default"].join(tourPath, tour.linkName, 'index.html'), 'w', /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee3(err, file) {
                    var city, data, tourFunction;
                    return _regeneratorRuntime["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return _City["default"].findOne({
                              linkName: tour.linkName
                            }).populate({
                              path: 'tours',
                              model: 'Tour'
                            });

                          case 2:
                            city = _context3.sent;
                            data = {
                              city: city
                            };
                            tourFunction = _pug["default"].compileFile(_path["default"].join(__dirname, '../views', 'tours.pug'));

                            _fs["default"].write(file, tourFunction({
                              data: data
                            }), function (err) {
                              if (err) throw err;
                              console.log("".concat(tour.linkName, ".html build done!"));

                              _fs["default"].close(file, function (err) {
                                if (err) throw err;
                              });
                            });

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x4, _x5) {
                    return _ref4.apply(this, arguments);
                  };
                }());
              });
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateCities() {
    return _ref3.apply(this, arguments);
  };
}();

var updateStyles = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee6() {
    var stylePath, tripStyles;
    return _regeneratorRuntime["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            // create files at trip styles
            stylePath = _path["default"].join(__dirname, '../public', 'styles');
            _context6.next = 3;
            return _Style["default"].find({});

          case 3:
            tripStyles = _context6.sent;
            tripStyles.forEach(function (style) {
              _fs["default"].mkdir(_path["default"].join(stylePath, style.linkName), function (err) {
                if (err.code != 'EEXIST') throw err;

                _fs["default"].open(_path["default"].join(stylePath, style.linkName, 'index.html'), 'w', /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee5(err, file) {
                    var tripStyle, data, styleFunction;
                    return _regeneratorRuntime["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return _Style["default"].findOne({
                              linkName: style.linkName
                            }).populate({
                              path: 'cities',
                              model: 'City'
                            }).populate({
                              path: 'tours',
                              model: 'Tour'
                            });

                          case 2:
                            tripStyle = _context5.sent;
                            data = {
                              tripStyle: tripStyle
                            };
                            styleFunction = _pug["default"].compileFile(_path["default"].join(__dirname, '../views', 'styles.pug'));

                            _fs["default"].write(file, styleFunction({
                              data: data
                            }), function (err) {
                              if (err) throw err;
                              console.log("".concat(style.linkName, ".html build done!"));

                              _fs["default"].close(file, function (err) {
                                if (err) throw err;
                              });
                            });

                          case 6:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x6, _x7) {
                    return _ref6.apply(this, arguments);
                  };
                }());
              });
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateStyles() {
    return _ref5.apply(this, arguments);
  };
}();

var updateBlogs = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee7() {
    return _regeneratorRuntime["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function updateBlogs() {
    return _ref7.apply(this, arguments);
  };
}();

var updateTours = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee9() {
    var tripPath, tours;
    return _regeneratorRuntime["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            // create files at dest path
            tripPath = _path["default"].join(__dirname, '../public', 'trips');
            _context9.next = 3;
            return _Tour["default"].find({});

          case 3:
            tours = _context9.sent;
            tours.forEach(function (tour) {
              _fs["default"].mkdir(_path["default"].join(tripPath, tour.linkName), function (err) {
                if (err.code != 'EEXIST') throw err;

                _fs["default"].open(_path["default"].join(tripPath, tour.linkName, 'index.html'), 'w', /*#__PURE__*/function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee8(err, file) {
                    var trip, data, tourFunction;
                    return _regeneratorRuntime["default"].wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _context8.next = 2;
                            return _Tour["default"].findOne({
                              linkName: tour.linkName
                            });

                          case 2:
                            trip = _context8.sent;
                            data = {
                              trip: trip
                            };
                            tourFunction = _pug["default"].compileFile(_path["default"].join(__dirname, '../views', 'trips.pug'));

                            _fs["default"].write(file, tourFunction({
                              data: data
                            }), function (err) {
                              if (err) throw err;
                              console.log("".concat(tour.linkName, ".html build done!"));

                              _fs["default"].close(file, function (err) {
                                if (err) throw err;
                              });
                            });

                          case 6:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x8, _x9) {
                    return _ref9.apply(this, arguments);
                  };
                }());
              });
            });

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function updateTours() {
    return _ref8.apply(this, arguments);
  };
}();

var updateIndex = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee10() {
    var destinations, tripStyles, tours, blogs, cities, data, index;
    return _regeneratorRuntime["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _Destination["default"].find({});

          case 3:
            destinations = _context10.sent;
            _context10.next = 6;
            return _Style["default"].find({});

          case 6:
            tripStyles = _context10.sent;
            _context10.next = 9;
            return _Tour["default"].find({});

          case 9:
            tours = _context10.sent;
            _context10.next = 12;
            return _Blog["default"].find({});

          case 12:
            blogs = _context10.sent;
            _context10.next = 15;
            return _City["default"].find({});

          case 15:
            cities = _context10.sent;
            data = {
              destinations: destinations,
              tripStyles: tripStyles,
              upComingTours: tours,
              blogs: blogs
            };
            index = _pug["default"].compileFile(_path["default"].join(__dirname, '../views', 'index.pug')); // build index.html

            _fs["default"].writeFile(_path["default"].join(__dirname, '../public', 'index.html'), index({
              data: data
            }), function (err) {
              if (err) throw err;
              console.log('index.html build done!');
            });

            _context10.next = 24;
            break;

          case 21:
            _context10.prev = 21;
            _context10.t0 = _context10["catch"](0);
            console.log("An Error Occured: ".concat(_context10.t0));

          case 24:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 21]]);
  }));

  return function updateIndex() {
    return _ref10.apply(this, arguments);
  };
}();

var _default = {
  updateIndex: updateIndex,
  updateBlogs: updateBlogs,
  updateDests: updateDests,
  updateTours: updateTours,
  updateCities: updateCities,
  updateStyles: updateStyles
};
exports["default"] = _default;