// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

const listAll = (req, res) => {
  res.redirect('/#blogs');
};

const listOne = async (req, res) => {
  try {
    let apiUrl = process.env.API_URL;

    let trip = await axios.get(`${apiUrl}/tours/${req.params.linkName}`);

    let data = {
      title:'Tours',
      trip: trip.data,
    };

    res.render('tours', {data});
  } catch (Error) {}
};

export default {listOne, listAll};
