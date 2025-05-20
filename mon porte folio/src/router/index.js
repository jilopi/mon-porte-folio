import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import error from '../views/error404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  {
    path: '/home',
    redirect: '/'
  },
     {
    path: '/:pathMatch(.*)*', 
    name: 'notfound',
    component: error,
  }
  ],
})

export default router
