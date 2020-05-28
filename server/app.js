// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {uuid} from 'uuidv4';
import mongoose from 'mongoose';
import session from 'express-session';
import SessionStore from 'connect-mongo';
import adminRouter from './routes/admin';
import indexRouter from './routes/index';
import destRouter from './routes/destinations';
import tourRouter from './routes/tours';
import tripsRouter from './routes/trips';
import stylesRouter from './routes/styles';
import blogsRouter from './routes/blogs';
import uploadsRouter from './routes/uploads';
import downloadsRouter from './routes/downloads';
import '../utilities/Database';

const app = express();
const sessionStore = new SessionStore(session);
const sessionOptions = {
  secret: uuid(),
  resave: false,
  saveUninitialized: true,
  store: new sessionStore({mongooseConnection: mongoose.connection}),
  cookie: {
    name: 'hikerr_session_id',
    secure: true,
    rolling: true,
    maxAge: 60 * 60 * 1000, // valid for one day
  },
  genid() {
    return uuid();
  },
};

if (app.get('env') == 'development') {
  sessionOptions.cookie.secure = false;
}

app.use(session(sessionOptions));

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/destinations', destRouter);
app.use('/tours', tourRouter);
app.use('/trips', tripsRouter);
app.use('/styles', stylesRouter);
app.use('/blogs',blogsRouter);
app.use('/upload', uploadsRouter);
app.use('/download', downloadsRouter);

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

export default app;
