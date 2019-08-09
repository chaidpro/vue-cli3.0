import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/404',
      name: '404',
      meta: {
        title: 404
      },
      // route level code-splitting
      // this generates a separate chunk (store.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "store" */ '@/common/404.vue')
    },
    {
      path: '/echarts',
      name: 'echarts',
      meta: {
        title: 'echarts'
      },
      component: () => import(/* webpackChunkName: "store" */ '@/views/echarts/index'),
      children: [
        {
          path: 'lineModule',
          name: 'lineModule',
          meta: {
            title: 'lineModule'
          },
          component: () => import(/* webpackChunkName: "store" */ '@/views/echarts/lineModule')
        },
        {
          path: 'pieModule',
          name: 'pieModule',
          meta: {
            title: 'pieModule'
          },
          component: () => import(/* webpackChunkName: "store" */ '@/views/echarts/pieModule')
        }
      ]
    },
    {
      path: '/example',
      name: 'example',
      meta: {
        title: 'example'
      },
      component: () => import('@/views/example/index'),
      children: [
        {
          path: 'store',
          name: 'store',
          meta: {
            title: 'store'
          },
          component: () => import(/* webpackChunkName: "store" */ '@/views/example/store')
        }
      ]
    },
    { path: '*', redirect: '/404' }
  ]
});
