import mongoose from 'mongoose';

const TourSchema = new mongoose.Schema({
  linkName: String,
  imageName: String,
  imageCaption: String,
  heading: String,
  caption: String,
  priceMin: Number,
  priceMax: Number,
  holidayLength: Number,
  holidayType: String,
  bestTimeToGo: String,
  formImage: String,
  status: String,
  departures: [String],
  highlightsCaption: String,
  highlightsImages: [{type: String}],
  itinerary: [
    {
      heading: String,
      caption: String,
      image: String,
    },
  ],
});

export default mongoose.model('Tour', TourSchema);
