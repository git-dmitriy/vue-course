import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main';
import Posts from '@/pages/Posts';
import About from '@/pages/About';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: Posts,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
