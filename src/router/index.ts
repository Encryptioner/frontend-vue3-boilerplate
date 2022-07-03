import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';

const titlePrefix = 'Vite + Vue + TypeScript + Tailwind Starter Template';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/Ecommerce.vue'),
    meta: {
      title: `${titlePrefix} - Ecommerce`,
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: `${titlePrefix} - Home`,
    },
  },
  {
    path: '/home2',
    name: 'Home2',
    component: () => import('@/views/Home2.vue'),
    meta: {
      title: `${titlePrefix} - Home 2`,
    },
  },
  {
    path: '/ecommerce',
    name: 'Ecommerce',
    component: () => import('@/views/Ecommerce.vue'),
    meta: {
      title: `${titlePrefix} - Ecommerce`,
    },
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
