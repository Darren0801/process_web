const routes = [
    {
      path: '/',
      redirect: '/homepage',
      component: () => import('../views/Main.vue'),
    },
    {
      title: '首页',
      path: '/homepage',
      name: 'homepage',
      redirect: '/homepage/homeOne',
      component: () => import('../views/Main.vue'),
      children: [
        {
          title: '首页一',
          path: 'homeOne',
          component: () => import('../views/homepage/homeOne.vue'),
        },
        {
          title: '首页二',
          path: 'homeTwo',
          component: () => import('../views/homepage/homeTwo.vue'),
        },
      ],
    },
    {
      title: '流程管理',
      path: '/processdesign',
      redirect: '/processdesign/processDesign',
      component: () => import('../views/Main.vue'),
      children: [
        {
          title: '首页一',
          path: 'ProcessList',
          name: 'Process-List',
          component: () => import('../views/processdesign/ProcessList.vue'),
        },
        {
          title: '首页二',
          path: 'ProcessDetail',
          name: 'ProcessDetail',
          component: () => import('../views/processdesign/ProcessDetail.vue'),
        },
      ],
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue'),
    },
  ];
  export default routes;
  