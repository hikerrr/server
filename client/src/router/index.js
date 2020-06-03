import Vue from 'vue';
import VueRouter from 'vue-router';

import DestinationList from '../components/DestinationList';
import DestinationForm from '../components/DestinationForm';
import DestinationFormNew from '../components/DestinationFormNew';

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin/dashboard',
    component: DestinationList,
  },
  {
    path: '/admin/dashboard/destinations',
    component: DestinationList,
  },
  {
    path: '/admin/dashboard/destinations/new',
    component: DestinationFormNew,
  },
  {
    path: '/admin/dashboard/destinations/:id',
    component: DestinationForm,
    props: true,
  },
  {
    path: '*',
    redirect: '/admin/dashboard',
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
