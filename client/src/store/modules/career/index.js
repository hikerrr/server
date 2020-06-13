import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  careers: [],
};

const careerModule = {
  namspaced: false,
  state,
  mutations,
  actions,
  getters,
};

export default careerModule;
