import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../pages/MainLayout.vue'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage
        }
      ]
    }
  ]
})

export default router
