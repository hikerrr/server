import mongoose from 'mongoose';

const DestinationSchema = new mongoose.Schema({
  linkName: String,
  imageName: String,
  imageCaption: String,
  heading: String,
  caption: String,
  cities: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'City',
    },
  ],
});

export default mongoose.model('Destination', DestinationSchema);
