import mongoose from 'mongoose';

const DestinationSchema = new mongoose.Schema({
  linkName: String,
  imageName: String,
  imageCaption: String,
  heading: String,
  caption: String,
  blog: {
    type: mongoose.Types.ObjectId,
    ref: 'Blog',
  },
  tours: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Tour',
    },
  ],
});

export default mongoose.model('Destination', DestinationSchema);
