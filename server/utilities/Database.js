const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // mongoose.connection.db.dropDatabase();
    console.log('Connected to database.');
  })
  .catch((err) => {
    console.log(`Cannot connect to database. Error: ${err}`);
  });

const shutDownDatabaseConnection = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Database Connection Closed. ${msg}`);
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
