// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

const listAll = (req, res) => {
  res.redirect('/#ts');
};

const listOne = async (req, res) => {
  try {
    let apiUrl = process.env.API_URL;

    let tripStyle = await axios.get(`${apiUrl}/styles/${req.params.linkName}`);

    let data = {
      title:'Trip Styles',
      navColor:'transparent',
      tripStyle: tripStyle.data,
    };

    res.render('styles', {data});
  } catch (Error) {}
};

export default {listOne, listAll};
