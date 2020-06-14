// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

const listAll = (req, res) => {
  res.redirect('/#ds');
};

const listOne = async (req, res) => {
  try {
    const apiUrl = process.env.API_URL;

    const destResponse = await axios.get(
      `${apiUrl}/destinations/${req.params.linkName}`
    );

    const destination = destResponse.data;

    const response = await axios.get(`${apiUrl}/styles`);
    const styles = response.data;
    const tripStyles = {};

    for (const style of styles) {
      for (const tour of style.tours) {
        if (destination.tours.some((t) => t._id === tour._id)) {
          if (
            tripStyles[style.heading] &&
            !tripStyles[style.heading].includes(tour)
          ) {
            tripStyles[style.heading].push(tour);
          } else {
            tripStyles[style.heading] = [tour];
          }
        }
      }
      for (const substyle of style.substyles) {
        for (const tour of substyle.tours) {
          if (destination.tours.some((t) => t._id === tour._id)) {
            if (
              tripStyles[style.heading] &&
              !tripStyles[style.heading].includes(tour)
            ) {
              tripStyles[style.heading].push(tour);
            } else {
              tripStyles[style.heading] = [tour];
            }
          }
        }
      }
    }

    console.log(tripStyles);

    const data = {
      title: 'Destinations',
      navColor: 'transparent',
      destination,
      tripStyles,
      imageUrl: process.env.AWS_IMAGE_URL,
    };

    res.render('destinations', {data});
  } catch (Error) {
    console.log(Error);
  }
};

export default {listOne, listAll};
