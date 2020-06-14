// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import createError from 'http-errors';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import logger from 'morgan';
import {uuid} from 'uuidv4';
import mongoose from 'mongoose';
import session from 'express-session';
import SessionStore from 'connect-mongo';
import adminRouter from './routes/admin';
import indexRouter from './routes/index';
import destRouter from './routes/destinations';
import substylesRouter from './routes/substyles';
import toursRouter from './routes/tours';
import stylesRouter from './routes/styles';
import blogsRouter from './routes/blogs';
import uploadsRouter from './routes/uploads';
import downloadsRouter from './routes/downloads';
import apiRouter from './api/index';
import adminAuth from './authentication/admin';
import termsRouter from './routes/terms';
import careersRouter from './routes/careers';
import contactsRouter from './routes/contacts';
import './utilities/Database';

const app = express();
const sessionStore = new SessionStore(session);
const store = new sessionStore({
  mongooseConnection: mongoose.connection,
  autoRemove: 'interval',
  autoRemoveInterval: 60, // expired sessions will be removed after 1 hour
});

const sessionOptions = {
  secret: uuid(), // uids are good for signing cookies --
  resave: false, // don't update on requests -- we use static
  saveUninitialized: false, // don't init session until done manually
  rolling: true, // renew the expiry time on new requests
  unset: 'destroy',
  name: 'hikerr_session_id',
  store,
  cookie: {
    path: '/',
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // valid for one day
  },
  genid() {
    return uuid();
  },
};

if (app.get('env') == 'development') {
  sessionOptions.cookie.secure = false;
}

app.use(helmet());
app.use(session(sessionOptions));

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));
app.use(
  '/admin/dashboard',
  adminAuth,
  express.static(path.join(__dirname, '../client/prod'))
);

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/destinations', destRouter);
app.use('/substyles', substylesRouter);
app.use('/tours', toursRouter);
app.use('/styles', stylesRouter);
app.use('/blogs', blogsRouter);
app.use('/terms', termsRouter);
app.use('/careers', careersRouter);
app.use('/contact', contactsRouter);
app.use('/upload', uploadsRouter);
app.use('/download', downloadsRouter);
app.use('/api', apiRouter);

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
