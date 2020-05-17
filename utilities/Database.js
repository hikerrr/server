const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database.');
  })
  .catch((err) => {
    console.log(`Cannot connect to database. Error: ${err}`);
  });
