import Vue from 'vue';
import VueRouter from 'vue-router';

import DestinationList from '../components/Destination/DestinationList';
import DestinationForm from '../components/Destination/DestinationForm';
import DestinationFormNew from '../components/Destination/DestinationFormNew';

import SubstyleList from '../components/Substyle/SubstyleList';
import SubstyleForm from '../components/Substyle/SubstyleForm';
import SubstyleFormNew from '../components/Substyle/SubstyleFormNew';

import StyleList from '../components/Style/StyleList';
import StyleForm from '../components/Style/StyleForm';
import StyleFormNew from '../components/Style/StyleFormNew';

import TourList from '../components/Tour/TourList';
import TourForm from '../components/Tour/TourForm';
import TourFormNew from '../components/Tour/TourFormNew';

import CareerList from '../components/Career/CareerList';
import CareerForm from '../components/Career/CareerForm';
import CareerFormNew from '../components/Career/CareerFormNew';

import BlogList from '../components/Blog/BlogList';
import BlogForm from '../components/Blog/BlogForm';
import BlogFormNew from '../components/Blog/BlogFormNew';

import BookingList from '../components/Booking/BookingList';
import BookingListItem from '../components/Booking/BookingListItem';

import UploadPhotos from '../components/Upload/UploadPhotos';

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin/dashboard',
    component: DestinationList,
  },
  {
    path: '/admin/dashboard/upload',
    component: UploadPhotos,
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
    path: '/admin/dashboard/substyles',
    component: SubstyleList,
  },
  {
    path: '/admin/dashboard/substyles/new',
    component: SubstyleFormNew,
  },
  {
    path: '/admin/dashboard/substyles/:id',
    component: SubstyleForm,
    props: true,
  },
  {
    path: '/admin/dashboard/tours',
    component: TourList,
  },
  {
    path: '/admin/dashboard/tours/new',
    component: TourFormNew,
  },
  {
    path: '/admin/dashboard/tours/:id',
    component: TourForm,
    props: true,
  },
  {
    path: '/admin/dashboard/bookings',
    component: BookingList,
  },
  {
    path: '/admin/dashboard/bookings/:id',
    component: BookingListItem,
    props: true,
  },
  {
    path: '/admin/dashboard/styles',
    component: StyleList,
  },
  {
    path: '/admin/dashboard/styles/new',
    component: StyleFormNew,
  },
  {
    path: '/admin/dashboard/styles/:id',
    component: StyleForm,
    props: true,
  },
  {
    path: '/admin/dashboard/careers',
    component: CareerList,
  },
  {
    path: '/admin/dashboard/careers/new',
    component: CareerFormNew,
  },
  {
    path: '/admin/dashboard/careers/:id',
    component: CareerForm,
    props: true,
  },
  {
    path: '/admin/dashboard/blogs',
    component: BlogList,
  },
  {
    path: '/admin/dashboard/blogs/new',
    component: BlogFormNew,
  },
  {
    path: '/admin/dashboard/blogs/:id',
    component: BlogForm,
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
