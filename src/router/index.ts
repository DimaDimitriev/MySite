import { createRouter, createWebHistory } from 'vue-router'
import Main from '../apps/Main.vue'
import About_me from '../apps/About_me.vue'
import Portfolio from '../apps/Portfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path: '/about',
      name: 'about',
      component: About_me,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    }
  ]
})

export default router
