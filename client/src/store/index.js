import Vue from 'vue';
import Vuex from 'vuex';
import admin from './modules/admin';
import blog from './modules/blog';
import city from './modules/city';
import booking from './modules/booking';
import style from './modules/style';
import destination from './modules/destination';
import tour from './modules/tour';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    admin,
    blog,
    city,
    booking,
    style,
    destination,
    tour,
  },
});
