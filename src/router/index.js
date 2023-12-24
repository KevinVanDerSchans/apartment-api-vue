import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import HousingPage from '@/views/HousingPage.vue'
import QuestionsPage from '@/views/QuestionsPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import ErrorPage from '@/views/ErrorPage.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: MainPage
  },
  {
    path: '/viviendas',
    name: 'housing',
    component: HousingPage
  },
  {
    path: '/preguntas',
    name: 'questions',
    component: QuestionsPage
  },
  {
    path: '/contacto',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: ErrorPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
