import axios from 'axios';

const actions = {
  getBookings(context) {
    axios.get('/api/bookings').then((response) => {
      context.commit('UPDATE_BOOKINGS', response.data.data);
    });
  },
};

export default actions;
