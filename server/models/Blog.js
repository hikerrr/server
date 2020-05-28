import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  linkName: String,
  author: String,
  title: String,
  content: String,
  caption: String,
  imageName: String,
  imageCaption: String,
  readTime: Number,
  writingDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Blog', BlogSchema);
