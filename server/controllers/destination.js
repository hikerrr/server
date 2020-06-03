// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

const listAll = (req, res) => {
  res.redirect('/#ds');
};

const listOne = async (req, res) => {
  try {
    let apiUrl = process.env.API_URL;

    let destination = await axios.get(
      `${apiUrl}/destinations/${req.params.linkName}`
    );
    let destinations = await axios.get(`${apiUrl}/destinations`);

    let data = {
      title:'Destinations',
      navColor:'transparent',
      destination: destination.data,
      destinations: destinations.data,
    };

    res.render('destinations', {data});
  } catch (Error) {}
};

export default {listOne, listAll};
