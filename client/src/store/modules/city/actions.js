import axios from 'axios';

const actions = {
  getCities(context) {
    axios
      .get('/api/cities')
      .then((response) => {
        if (response.status === 200) {
          context.commit('UPDATE_CITIES', response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default actions;
