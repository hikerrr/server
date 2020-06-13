// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

const listAll = (req, res) => res.redirect('/#blogs');

const listOne = async (req, res) => {
  try {
    const apiUrl = process.env.API_URL;

    const trip = await axios.get(`${apiUrl}/tours/${req.params.linkName}`);

    const data = {
      title: 'Tours',
      trip: trip.data,
      imageUrl:process.env.AWS_IMAGE_URL,
    };

    return res.render('tours', {data});
  } catch (Error) {}
};

const bookTour = (req, res) => {
  const apiUrl = process.env.API_URL;

  axios
    .post(`${apiUrl}/bookings/`, req.body)
    .then((response) => {
      if (response.status === 200) {
        const data = {
          navColor: 'var(--color-dark)',
          title: 'Form Submission',
          heading: 'We gotch your request!',
          msg: 'We will get back to you shortly',
        };
        return res.render('notify', {data});
      }

      const data = {
        navColor: 'var(--color-dark)',
        title: 'Form Submission',
        heading: "Oops! that didn't go well.",
        msg: 'There was a problem submitting your data.',
      };
      return res.render('notify', {data});
    })
    .catch((err) => {
      const data = {
        navColor: 'var(--color-dark)',
        title: 'Form Submission',
        heading: "Oops! that didn't go well.",
        msg: `There was a problem on our side.${err}`,
      };
      return res.render('notify', {data});
    });
};

export default {listOne, listAll, bookTour};
