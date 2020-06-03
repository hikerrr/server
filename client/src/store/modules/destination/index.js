import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  destinations: [],
};

const destinationModule = {
  namspaced: false,
  state,
  mutations,
  actions,
  getters,
};

export default destinationModule;
