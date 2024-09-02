import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/pages/MainPage';
import MainDashboard from '@/components/pages/MainDashboard';
import MainLogin from '@/components/pages/MainLogin';




const routes = [
  { path: '/MainPage', component: MainPage },
  { path: '/', component: MainDashboard },
  { path: '/Login', component: MainLogin },




];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
