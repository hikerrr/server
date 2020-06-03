import axios from 'axios';

const actions = {
  getStyles(context) {
    axios.get('/api/styles').then((response) => {
      context.commit('UPDATE_STYLES', response.data.data);
    });
  },
};

export default actions;
