import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  blogs: [],
};

const blogModule = {
  namspaced: false,
  state,
  mutations,
  actions,
  getters,
};

export default blogModule;
