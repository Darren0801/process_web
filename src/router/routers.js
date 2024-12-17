const routes = [
    {
      path: '/',
      // redirect: '/home',
      component: () => import('../views/Main.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/HomePage/HomePage.vue'),
    },
    
 
    // {
    //   title: '设施事件处置',
    //   path: '/incident',
    //   redirect: '/incident/monitoring',
    //   component: () => import('../views/Main.vue'),
    //   children: [
    //     {
    //       title: '设施运行监测',
    //       path: 'monitoring',
    //       name: 'incident-monitoring',
    //       component: () => import('../views/incident/monitoring/Monitoring.vue'),
    //     },
    //   ],
    // },
    // {
    //     path: '/404',
    //     name: '404',
    //     component: () => import('../404.vue'),
    //   },
  ];
  export default routes;
  