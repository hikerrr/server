import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  title: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  gender: String,
  departure: String,
  discountCode: String,
});

export default mongoose.model('Booking', BookingSchema);
