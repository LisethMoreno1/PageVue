import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/pages/MainPage';
import AppSidebar from '@/components/Layout/AppSidebar.vue';


const routes = [
  { path: '/MainPage', component: MainPage },
  { path: '/', component: AppSidebar },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
