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
  itineraryImages: [
    {type:String}
  ],
  itinerary: [
    {
      itineraryHeading: String,
      itineraryCaption: String
    }
  ],
});

export default mongoose.model('Tour', TourSchema);
