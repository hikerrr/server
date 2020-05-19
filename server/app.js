const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const {uuid} = require('uuidv4');

const adminRouter = require('./routes/admin');
const indexRouter = require('./routes/index');

const app = express();

/**
require('../utilities/Database');
const mongoose = require('mongoose');
const session = require('express-session');
const sessionStore = require('connect-mongo')(session);


const sessionOptions = {
  secret: uuid(),
  resave: false,
  saveUninitialized: true,
  store: new sessionStore({mongooseConnection: mongoose.connection}),
  cookie: {
    name: 'hikerr_session_id',
    secure: false,
    rolling: true,
    maxAge: 60 * 60 * 1000, // valid for one day
  },
  genid() {
    return uuid();
  },
};

if (app.get('env') == 'production') {
  sessionOptions.cookie.secure = true;
}

app.use(session(sessionOptions));
**/
// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
