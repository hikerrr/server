// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
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
  } catch (Error) {}
};

export default {listOne, listAll};
