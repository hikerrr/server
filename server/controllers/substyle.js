// needed by babel for async and generator functions of ES6
import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

const listAll = (req, res) => {
  res.redirect('/#blogs');
};

const listOne = async (req, res) => {
  try {
    const apiUrl = process.env.API_URL;

    const substyleResponse = await axios.get(
      `${apiUrl}/substyles/${req.params.linkName}`
    );
    const substyle = substyleResponse.data;

    const data = {
      title: substyle.heading,
      substyle,
      imageUrl:process.env.AWS_IMAGE_URL,
    };

    res.render('substyles', {data});
  } catch (Error) {
    // console.log(Error);
  }
};

export default {listOne, listAll};
