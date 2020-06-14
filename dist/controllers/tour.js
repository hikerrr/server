"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _axios = _interopRequireDefault(require("axios"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

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

var bookTour = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee2(req, res) {
    var apiUrl, transporter, mailOptions, info, response, data, _mailOptions, _data, _data2;

    return _regeneratorRuntime["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            apiUrl = process.env.API_URL;
            transporter = _nodemailer["default"].createTransport({
              service: 'gmail',
              auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
              }
            });
            mailOptions = {
              from: process.env.EMAIL,
              to: req.body.email,
              subject: 'Hikerr Booking Notice',
              text: '',
              html: "Your booking information was successfully recieved <br /><br />\n    <b>Name</b> ".concat(req.body.firstName, " ").concat(req.body.lastName, "\n    <b>Phone</b> ").concat(req.body.phone)
            };
            _context2.prev = 3;
            _context2.next = 6;
            return transporter.sendMail(mailOptions);

          case 6:
            info = _context2.sent;
            _context2.next = 9;
            return _axios["default"].post("".concat(apiUrl, "/bookings/"), req.body);

          case 9:
            response = _context2.sent;

            if (!(response.status === 200)) {
              _context2.next = 18;
              break;
            }

            data = {
              navColor: 'var(--color-dark)',
              title: 'Form Submission',
              heading: 'We gotch your request!',
              msg: 'We will get back to you shortly'
            };
            _mailOptions = {
              from: process.env.EMAIL,
              to: process.env.EMAIL,
              subject: 'Booking recieved',
              text: '',
              html: "Booking information recieved for <br /><br />\n        <b>Tour</b> ".concat(req.body.title, "\n        <b>Name</b> ").concat(req.body.firstName, " ").concat(req.body.lastName, "\n        <b>Phone</b> ").concat(req.body.phone, "\n        <b>Discount Code</b> ").concat(req.body.discountCode || 'NA')
            };
            _context2.next = 15;
            return transporter.sendMail(_mailOptions);

          case 15:
            return _context2.abrupt("return", res.render('notify', {
              data: data
            }));

          case 18:
            if (!(response.status === 409)) {
              _context2.next = 23;
              break;
            }

            _data = {
              navColor: 'var(--color-dark)',
              title: 'Form Submission',
              heading: 'Booking already present for these credentials!',
              msg: 'If you think this is a problem. You can send us an email.'
            };
            return _context2.abrupt("return", res.render('notify', {
              data: _data
            }));

          case 23:
            throw new Error('Insufficient data error.');

          case 24:
            _context2.next = 31;
            break;

          case 26:
            _context2.prev = 26;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);
            _data2 = {
              navColor: 'var(--color-dark)',
              title: 'Form Submission',
              heading: 'There was a problem booking your tour!' + _context2.t0.message,
              msg: 'You can send us an email.'
            };
            return _context2.abrupt("return", res.render('notify', {
              data: _data2
            }));

          case 31:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 26]]);
  }));

  return function bookTour(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  listOne: listOne,
  listAll: listAll,
  bookTour: bookTour
};
exports["default"] = _default;