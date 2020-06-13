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
  return res.redirect('/#blogs');
};

var listOne = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res) {
    var apiUrl, trip, data;
    return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            apiUrl = process.env.API_URL;
            _context.next = 4;
            return _axios["default"].get("".concat(apiUrl, "/tours/").concat(req.params.linkName));

          case 4:
            trip = _context.sent;
            data = {
              title: 'Tours',
              trip: trip.data,
              imageUrl: process.env.AWS_IMAGE_URL
            };
            return _context.abrupt("return", res.render('tours', {
              data: data
            }));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function listOne(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var bookTour = function bookTour(req, res) {
  var apiUrl = process.env.API_URL;

  _axios["default"].post("".concat(apiUrl, "/bookings/"), req.body).then(function (response) {
    if (response.status === 200) {
      var _data = {
        navColor: 'var(--color-dark)',
        title: 'Form Submission',
        heading: 'We gotch your request!',
        msg: 'We will get back to you shortly'
      };
      return res.render('notify', {
        data: _data
      });
    }

    var data = {
      navColor: 'var(--color-dark)',
      title: 'Form Submission',
      heading: "Oops! that didn't go well.",
      msg: 'There was a problem submitting your data.'
    };
    return res.render('notify', {
      data: data
    });
  })["catch"](function (err) {
    var data = {
      navColor: 'var(--color-dark)',
      title: 'Form Submission',
      heading: "Oops! that didn't go well.",
      msg: "There was a problem on our side.".concat(err)
    };
    return res.render('notify', {
      data: data
    });
  });
};

var _default = {
  listOne: listOne,
  listAll: listAll,
  bookTour: bookTour
};
exports["default"] = _default;