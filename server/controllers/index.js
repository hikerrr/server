// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

const indexController = async (req, res) => {
  try {
    const apiUrl = process.env.API_URL;

    const destinations = await axios.get(`${apiUrl}/destinations`);
    const tripStyles = await axios.get(`${apiUrl}/styles`);
    const blogs = await axios.get(`${apiUrl}/blogs`);
    const upComingTours = await axios.get(`${apiUrl}/tours`);

    const data = {
      title: 'Home',
      navColor: 'transparent',
      destinations: destinations.data,
      tripStyles: tripStyles.data,
      blogs: blogs.data,
      upComingTours: upComingTours.data,
      imageUrl:process.env.AWS_IMAGE_URL,
    };

    res.render('index', {data});
  } catch (Error) {
    console.log(`Error getting homepage: ${Error}`);
  }
};

export default indexController;
