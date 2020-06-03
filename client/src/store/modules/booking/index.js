import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  bookings: [],
};

const bookingModule = {
  namspaced: false,
  state,
  mutations,
  actions,
  getters,
};

export default bookingModule;
