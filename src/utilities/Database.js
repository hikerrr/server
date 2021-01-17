import mongoose from 'mongoose';
import Admin from '../api/models/Admin';
import {log} from './logger';

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGODB_URI, mongooseOptions)
  .then(() => {
    log('Connected to database.');
  })
  .catch((err) => {
    log(`Cannot connect to database. Error: ${err}`);
  });

const shutDownDatabaseConnection = (msg, callback) => {
  mongoose.connection.close(() => {
    log(`Database Connection Closed. ${msg}`);
    callback();
  });
};

// handle process events for database connection
// for nodemon restart signal
process.once('SIGUSR2', () => {
  shutDownDatabaseConnection('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// application termination
process.on('SIGINT', () => {
  shutDownDatabaseConnection('application terminated', () => {
    process.exit(0);
  });
});

// for heroku application termination
process.on('SIGTERM', () => {
  shutDownDatabaseConnection('Heroku application termination', () => {
    process.exit(0);
  });
});
