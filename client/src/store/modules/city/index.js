import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  cities: [],
};

const cityModule = {
  namspaced: false,
  state,
  mutations,
  actions,
  getters,
};

export default cityModule;
