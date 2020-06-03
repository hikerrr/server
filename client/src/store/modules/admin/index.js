import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  admins: [],
};

const adminModule = {
  namspaced: false,
  state,
  mutations,
  actions,
  getters,
};

export default adminModule;