import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/actors/:id',
      name: 'actors',
      component: () => import('../views/ActorDetailView.vue')
    },
    {
      path: '/movies/:id',
      name: 'movies',
      component: () => import('../views/MovieDetailView.vue')
    }
  ]
})

export default router
