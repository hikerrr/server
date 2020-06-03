import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  tours: [],
};

const tourModule = {
  namspaced: false,
  state,
  mutations,
  actions,
  getters,
};

export default tourModule;
