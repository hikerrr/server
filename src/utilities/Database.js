import mongoose from 'mongoose';
import Debug from 'debug';

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGODB_URI, mongooseOptions)
  .then(() => {
    Debug('Connected to database.');
  })
  .catch((err) => {
    Debug(`Cannot connect to database. Error: ${err}`);
  });

const shutDownDatabaseConnection = (msg, callback) => {
  mongoose.connection.close(() => {
    Debug(`Database Connection Closed. ${msg}`);
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
