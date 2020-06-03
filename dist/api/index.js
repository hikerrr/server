"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _admin = _interopRequireDefault(require("./routes/admin"));

var _blogs = _interopRequireDefault(require("./routes/blogs"));

var _bookings = _interopRequireDefault(require("./routes/bookings"));

var _cities = _interopRequireDefault(require("./routes/cities"));

var _destinations = _interopRequireDefault(require("./routes/destinations"));

var _styles = _interopRequireDefault(require("./routes/styles"));

var _tours = _interopRequireDefault(require("./routes/tours"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use('/admins', _admin["default"]);
app.use('/blogs', _blogs["default"]);
app.use('/bookings', _bookings["default"]);
app.use('/cities', _cities["default"]);
app.use('/destinations', _destinations["default"]);
app.use('/styles', _styles["default"]);
app.use('/tours', _tours["default"]);
var _default = app;
exports["default"] = _default;