import axios from 'axios';

const actions = {
  getBookings(context) {
    axios.get('/api/bookings').then((response) => {
      if (response.status === 200) {
        context.commit('UPDATE_BOOKINGS', response.data);
      }
    });
  },
};

export default actions;
