import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({
  linkName: String,
  imageName: String,
  imageCaption: String,
  heading: String,
  caption: String,
  tours: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Tour',
    },
  ],
});

export default mongoose.model('City', CitySchema);
