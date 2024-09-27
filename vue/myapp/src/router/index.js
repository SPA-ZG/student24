
import { createRouter, createWebHistory } from 'vue-router';
import BlogComponent from '../views/BlogComponent.vue';
import NotFound from '../views/NotFound.vue';
import PageTutorial from '../views/PageTutorial.vue';
import PageAbout from '../views/PageAbout.vue';

const routes = [
  {
    path: '/',
    name: 'BlogComponent',
    component: BlogComponent
  },
  {
    path: '/pageTutorial',
    name: 'PageTutorial',
    component: PageTutorial
  },
  {
    path: '/pageAbout',
    name: 'PageAbout',
    component: PageAbout
  },
  {
    // Catch-all route 
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
