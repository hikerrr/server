import axios from 'axios';

const listAll = (req, res) => res.redirect('/#blogs');

const listOne = async (req, res) => {
  try {
    const apiUrl = process.env.API_URL;

    const trip = await axios.get(`${apiUrl}/tours/${req.params.linkName}`);

    const data = {
      title: 'Tours',
      trip: trip.data,
      imageUrl: process.env.AWS_IMAGE_URL,
    };

    return res.render('tours', {data});
  } catch (Error) {
    return res.status(500).json(Error);
  }
};

export default {listOne, listAll};
