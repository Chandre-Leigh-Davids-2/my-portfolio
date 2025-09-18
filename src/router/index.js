import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Accreditations from '../views/Accreditations.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path:'/accreditations',
    name: 'accreditations',
    component: Accreditations
  },
  {
    path:'/projects',
    name: 'projects',
    component: Projects
  },
  {
    path:'/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
