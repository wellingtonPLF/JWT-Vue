import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './views/HomeScreen/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('./views/TestScreen/TestPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
