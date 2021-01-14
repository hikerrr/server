import mongoose from 'mongoose';

const SubstyleSchema = new mongoose.Schema({
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

export default mongoose.model('Substyle', SubstyleSchema);
