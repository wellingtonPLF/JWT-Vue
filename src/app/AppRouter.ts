import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './views/HomeScreen/HomePage.vue';
import SignInComponent from './views/SignInScreen/SignInPage.vue';
import ErrorComponent from './views/ErrorScreen/ErrorPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorComponent
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInComponent
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('./views/SignUpScreen/SignUpPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
