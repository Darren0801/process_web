import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';
// import { utils } from '@/utils/utils';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
//   base: process.env.BASE_URL,
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   if (to.path === '/404') {
//     next();
//     return;
//   }
//   if (to.matched.length === 0) {
//     next('/404');
//     return;
//   }

//   let token = localStorage.getItem('token');
//   if (!!token) {
//     next();
//   } else {
//     // utils.handleLogout();
//   }
// });

// router.afterEach((to, from) => {});

// router.onError((error) => {});
export default router;
