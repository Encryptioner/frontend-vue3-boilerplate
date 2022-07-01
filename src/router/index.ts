import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';

import Index from '@/views/Index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/home2',
    name: 'Home2',
    component: () => import('@/views/Home2.vue'),
  },
  {
    path: '/ecommerce',
    name: 'Ecommerce',
    component: () => import('@/views/Ecommerce.vue'),
  },
];

const historyPath = import.meta.env.ROUTE_HISTORY_PATH;

const router = createRouter({
  history: createWebHistory(historyPath?.length ? historyPath : '/'),
  routes,
});

router.beforeEach((to, from) => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
