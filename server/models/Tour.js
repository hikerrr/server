import mongoose from 'mongoose';

const TourSchema = new mongoose.Schema({
  linkName: String,
  imageName: String,
  imageCaption: String,
  startDate: {
    type: Date,
    default: Date.now,
  },
  heading: String,
  caption: String,
  priceMin: Number,
  priceMax: Number,
  durationMin: Number,
  durationMax: Number,
  itinerary: [
    [
      {
        type: String,
      },
    ],
  ],
});

export default mongoose.model('Tour', TourSchema);
