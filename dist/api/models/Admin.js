"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AdminSchema = new _mongoose["default"].Schema({
  username: String,
  password: String
});
AdminSchema.pre('save', function (next) {
  var _this = this;

  var saltIterations = 10;

  _bcrypt["default"].hash(this.password, saltIterations).then(function (hash) {
    _this.password = hash;
    next();
  })["catch"](function (err) {
    throw err;
  });
});

AdminSchema.statics.authenticate = function (username, password) {
  var _this2 = this;

  return new Promise(function (resolve, reject) {
    _this2.findOne({
      username: username
    }).then(function (admin) {
      if (admin) {
        _bcrypt["default"].compare(password, admin.password).then(function (isMatched) {
          return resolve(isMatched);
        })["catch"](function (error) {
          return reject(error);
        });
      } else {
        resolve(false);
      }
    })["catch"](function (error) {
      return reject(error);
    });
  });
};

var _default = _mongoose["default"].model('Admin', AdminSchema);

exports["default"] = _default;