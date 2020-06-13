// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

const listAll = (req, res) => {
  res.redirect('/#blogs');
};

const listOne = async (req, res) => {
  try {
    const apiUrl = process.env.API_URL;

    const blog = await axios.get(`${apiUrl}/blogs/${req.params.linkName}`);

    const data = {
      title: 'Blogs',
      blog: blog.data,
      imageUrl:process.env.AWS_IMAGE_URL
    };

    res.render('blogs', {data});
  } catch (Error) {}
};

export default {listOne, listAll};
