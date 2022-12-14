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
      path: '/search/:searchType/:expression',
      name: 'search',
      props: true,
      component: () => import('../views/SearchView.vue'),
    },
    {
      path: '/actors/:id',
      name: 'actors',
      props: true,
      component: () => import('../views/ActorDetailView.vue')
    },
    {
      path: '/movies/:id',
      name: 'movies',
      props: true,
      component: () => import('../views/MovieDetailView.vue')
    }
  ]
})

export default router
