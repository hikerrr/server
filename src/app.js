// needed by babel for async and generator functions of ES6
import "regenerator-runtime/runtime.js";
import createError from 'http-errors';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import logger from 'morgan';
import indexRouter from './routes/index';
import destRouter from './routes/destinations';
import substylesRouter from './routes/substyles';
import toursRouter from './routes/tours';
import stylesRouter from './routes/styles';
import blogsRouter from './routes/blogs';
import termsRouter from './routes/terms';
import careersRouter from './routes/careers';
import contactsRouter from './routes/contacts';

const app = express();

if (app.get('env') == 'development') {
  app.use(logger('dev'));
}

app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

if (process.env.NODE_ENV === 'production') {
  app.use((req,res,next) => {
    if (req.secure) {
      next();
    }
    else {
      res.redirect(`https://${req.headers.host}${req.url}`);
    }
  });
}

app.use('/', indexRouter);
app.use('/destinations', destRouter);
app.use('/substyles', substylesRouter);
app.use('/tours', toursRouter);
app.use('/styles', stylesRouter);
app.use('/blogs', blogsRouter);
app.use('/terms', termsRouter);
app.use('/careers', careersRouter);
app.use('/contact', contactsRouter);

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
