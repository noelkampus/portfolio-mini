import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import RnDPage from '../pages/RnDPage.vue'
import AboutMePage from '../pages/AboutMePage.vue'
import ProjectPage from '../pages/ProjectPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/RnD', component: RnDPage },
  { path: '/AboutMe', component: AboutMePage },
  { path: '/:id', component: ProjectPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
