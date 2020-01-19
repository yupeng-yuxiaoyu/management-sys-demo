import Vue from 'vue';
import VueRouter from 'vue-router';

import List from './pages/list/index.vue'
import User from './pages/user/index.vue'

import ListRouter from './pages/list/router'
import UserRouter from './pages/user/router'

Vue.use(VueRouter);

export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/list',
      component: List,
      children: ListRouter,
    }, {
      path: '/user',
      component: User,
      children: UserRouter,
    },
  ]
});