import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import ActiveFactPage from '../pages/FactPage.vue'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Profile from '../pages/Profile.vue'
// import { Auth0Provider } from '@bcwdev/auth0provider-client'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/facts/:id',
    name: 'FactPage',
    component: ActiveFactPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
