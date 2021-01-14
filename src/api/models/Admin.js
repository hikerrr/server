import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

AdminSchema.pre('save', function (next) {
  const saltIterations = 10;

  bcrypt
    .hash(this.password, saltIterations)
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch((err) => {
      throw err;
    });
});

AdminSchema.statics.authenticate = function (username, password) {
  return new Promise((resolve, reject) => {
    this.findOne({username})
      .then((admin) => {
        if (admin) {
          bcrypt
            .compare(password, admin.password)
            .then((isMatched) => resolve(isMatched))
            .catch((error) => reject(error));
        } else {
          resolve(false);
        }
      })
      .catch((error) => reject(error));
  });
};

export default mongoose.model('Admin', AdminSchema);
