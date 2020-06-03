import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import bus from './EventBus';

Vue.config.productionTip = false;

new Vue({
  bus,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
