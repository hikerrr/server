import Vue from 'vue';
import Vuex from 'vuex';
import admin from './modules/admin';
import blog from './modules/blog';
import substyle from './modules/substyle';
import booking from './modules/booking';
import style from './modules/style';
import destination from './modules/destination';
import tour from './modules/tour';
import career from './modules/career';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    admin,
    blog,
    substyle,
    booking,
    style,
    destination,
    tour,
    career,
  },
});
