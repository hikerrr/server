import axios from 'axios';

const listAll = async (req, res) => {
  try {
    const apiUrl = process.env.API_URL;

    const careers = await axios.get(`${apiUrl}/careers`);

    const data = {
      title: 'Careers',
      careers: careers.data,
      navColor: 'var(--color-dark)',
      imageUrl: process.env.AWS_IMAGE_URL,
    };

    res.render('careers', {data});
  } catch (Error) {
    res.status(500).json(Error);
  }
};

export default {listAll};
