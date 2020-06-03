import axios from 'axios';

const actions = {
  getTours(context) {
    axios.get('/api/tours').then((response) => {
      context.commit('UPDATE_TOURS', response.data.data);
    });
  },
};

export default actions;
