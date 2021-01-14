import mongoose from 'mongoose';

const StyleSchema = new mongoose.Schema({
  linkName: String,
  imageName: String,
  imageCaption: String,
  heading: String,
  caption: String,
  substyles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Substyle',
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
