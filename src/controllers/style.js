import axios from 'axios';

const listAll = (req, res) => {
  res.redirect('/#ts');
};

const listOne = async (req, res) => {
  try {
    const apiUrl = process.env.API_URL;

    const tripStyle = await axios.get(
      `${apiUrl}/styles/${req.params.linkName}`
    );

    const data = {
      title: 'Trip Styles',
      navColor: 'transparent',
      tripStyle: tripStyle.data,
      imageUrl: process.env.AWS_IMAGE_URL,
    };

    res.render('styles', {data});
  } catch (Error) {
    return res.status(500).json(Error);
  }
};

export default {listOne, listAll};
