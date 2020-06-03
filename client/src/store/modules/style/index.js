import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  styles: [],
};

const styleModule = {
  namspaced: false,
  state,
  mutations,
  actions,
  getters,
};

export default styleModule;
