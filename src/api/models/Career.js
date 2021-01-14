import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  linkName: String,
  name: String,
  experience: String,
  functionalAreas: String,
  description: String,
  mailSubject: String,
});

export default mongoose.model('Career', CareerSchema);
