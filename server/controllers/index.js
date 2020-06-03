// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

const indexController = async (req, res) => {
  try {
    let apiUrl = process.env.API_URL;

    let destinations = await axios.get(`${apiUrl}/destinations`);
    let tripStyles = await axios.get(`${apiUrl}/styles`);
    let blogs = await axios.get(`${apiUrl}/blogs`);
    let upComingTours = await axios.get(`${apiUrl}/tours`);

    const data = {
      title:'Home',
      navColor:'transparent',
      destinations: destinations.data,
      tripStyles: tripStyles.data,
      blogs: blogs.data,
      upComingTours: upComingTours.data,
    };

    res.render('index', {data});
  } catch (Error) {
    console.log(`Error getting homepage: ${Error}`);
  }
};

export default indexController;
