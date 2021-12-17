import { createRouter, createWebHashHistory } from 'vue-router';
import { ROUTER_MAP } from './constant';
import store from '../store';

const homepage = () => import(/* webpackChunkName: 'homepage' */ '../page/homepage/homepage.vue');
const about = () => import(/* webpackChunkName: 'about' */ '../page/about/about.vue');

const routerHashHistory = createWebHashHistory();

const router = createRouter({
  history: routerHashHistory,
  routes: [
    {
      path: ROUTER_MAP[0],
      component: homepage
    },
    {
      path: ROUTER_MAP[1],
      component: about
    }
  ]
});

router.beforeEach((to, from, next) => {
  for (const key in ROUTER_MAP) {
    if (to.matched && to.matched.length > 0 && ROUTER_MAP[key] === to.matched[0].path) {
      store.commit('setRouterIndex', key);
      break;
    }
  }
  next();
});

export default router;
