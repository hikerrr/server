import axios from 'axios';

const actions = {
  getAdmins(context) {
    axios.get('/api/admins').then((response) => {
      context.commit('UPDATE_ADMINS', response.data);
    });
  },
};

export default actions;
