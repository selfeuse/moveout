import Vue from 'vue';
import Router from 'vue-router';
import Furnitures from './views/Furnitures.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/furnitures'
    },
    {
      path: '/furnitures',
      name: 'furnitures',
      component: Furnitures
    },
    {
      path: '/furnitures/new',
      name: 'new-furnitures',
      component: New
    },
    {
      path: '/furnitures/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/furnitures/:id/edit',
      name: 'edit',
      component: Edit
    }
   
  ]
});