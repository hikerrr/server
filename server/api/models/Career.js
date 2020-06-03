import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  name: String,
  experience: String,
  functionalAreas: String,
  description: String,
  mailSubject: String
});

export default mongoose.model('Career', CareerSchema);
