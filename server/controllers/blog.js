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
      navColor: 'var(--color-dark)',
      imageUrl: process.env.AWS_IMAGE_URL,
    };

    res.render('blogs', {data});
  } catch (Error) {
    res.status(500).json(Error);
  }
};

export default {listOne, listAll};
