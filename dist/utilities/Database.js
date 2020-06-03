"use strict";

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  // mongoose.connection.db.dropDatabase();
  console.log('Connected to database.');
})["catch"](function (err) {
  console.log("Cannot connect to database. Error: ".concat(err));
});

var shutDownDatabaseConnection = function shutDownDatabaseConnection(msg, callback) {
  mongoose.connection.close(function () {
    console.log("Database Connection Closed. ".concat(msg));
    callback();
  });
}; // handle process events for database connection
// for nodemon restart signal


process.once('SIGUSR2', function () {
  shutDownDatabaseConnection('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
}); // application termination

process.on('SIGINT', function () {
  shutDownDatabaseConnection('application terminated', function () {
    process.exit(0);
  });
}); // for heroku application termination

process.on('SIGTERM', function () {
  shutDownDatabaseConnection('Heroku application termination', function () {
    process.exit(0);
  });
});