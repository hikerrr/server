import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  title: String,
  name: String,
  email: String,
  phone: String,
  from: Date,
});

export default mongoose.model('Booking', BookingSchema);
