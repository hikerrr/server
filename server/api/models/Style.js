import mongoose from 'mongoose';

const StyleSchema = new mongoose.Schema({
  linkName: String,
  imageName: String,
  imageCaption: String,
  heading: String,
  caption: String,
  cities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City',
    },
  ],
  tours: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tour',
    },
  ],
});

export default mongoose.model('Style', StyleSchema);
