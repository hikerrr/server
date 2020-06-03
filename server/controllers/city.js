// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

const listAll = (req, res) => {
  res.redirect('/#blogs');
};

const listOne = async (req, res) => {
  try {
    let apiUrl = process.env.API_URL;

    let city = await axios.get(`${apiUrl}/cities/${req.params.linkName}`);

    let data = {
      title:'Cities',
      city: city.data,
    };

    res.render('cities', {data});
  } catch (Error) {}
};

export default {listOne, listAll};
