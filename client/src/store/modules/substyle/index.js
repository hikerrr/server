import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  substyles: [],
};

const cityModule = {
  namspaced: false,
  state,
  mutations,
  actions,
  getters,
};

export default cityModule;
