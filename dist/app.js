"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _uuidv = require("uuidv4");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _admin = _interopRequireDefault(require("./routes/admin"));

var _index = _interopRequireDefault(require("./routes/index"));

var _destinations = _interopRequireDefault(require("./routes/destinations"));

var _substyles = _interopRequireDefault(require("./routes/substyles"));

var _tours = _interopRequireDefault(require("./routes/tours"));

var _styles = _interopRequireDefault(require("./routes/styles"));

var _blogs = _interopRequireDefault(require("./routes/blogs"));

var _uploads = _interopRequireDefault(require("./routes/uploads"));

var _downloads = _interopRequireDefault(require("./routes/downloads"));

var _index2 = _interopRequireDefault(require("./api/index"));

var _admin2 = _interopRequireDefault(require("./authentication/admin"));

var _terms = _interopRequireDefault(require("./routes/terms"));

var _careers = _interopRequireDefault(require("./routes/careers"));

require("./utilities/Database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// needed by babel for async and generator functions of ES6
var app = (0, _express["default"])();
var sessionStore = new _connectMongo["default"](_expressSession["default"]);
var store = new sessionStore({
  mongooseConnection: _mongoose["default"].connection,
  autoRemove: 'interval',
  autoRemoveInterval: 60 // expired sessions will be removed after 1 hour

});
var sessionOptions = {
  secret: (0, _uuidv.uuid)(),
  // uids are good for signing cookies --
  resave: false,
  // don't update on requests -- we use static
  saveUninitialized: false,
  // don't init session until done manually
  rolling: true,
  // renew the expiry time on new requests
  unset: 'destroy',
  name: 'hikerr_session_id',
  store: store,
  cookie: {
    path: '/',
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // valid for one day

  },
  genid: function genid() {
    return (0, _uuidv.uuid)();
  }
};

if (app.get('env') == 'development') {
  sessionOptions.cookie.secure = false;
}

app.use((0, _helmet["default"])());
app.use((0, _expressSession["default"])(sessionOptions)); // view engine setup

app.set('views', _path["default"].join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use('/admin/dashboard', _admin2["default"], _express["default"]["static"](_path["default"].join(__dirname, '../client/prod')));
app.use('/', _index["default"]);
app.use('/admin', _admin["default"]);
app.use('/destinations', _destinations["default"]);
app.use('/substyles', _substyles["default"]);
app.use('/tours', _tours["default"]);
app.use('/styles', _styles["default"]);
app.use('/blogs', _blogs["default"]);
app.use('/terms', _terms["default"]);
app.use('/careers', _careers["default"]);
app.use('/upload', _uploads["default"]);
app.use('/download', _downloads["default"]);
app.use('/api', _index2["default"]); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
var _default = app;
exports["default"] = _default;