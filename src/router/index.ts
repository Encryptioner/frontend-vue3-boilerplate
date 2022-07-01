import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import { historyPath } from '@/configs/client.config.json';

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

const router = createRouter({
  history: createWebHistory(historyPath),
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
