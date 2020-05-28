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
