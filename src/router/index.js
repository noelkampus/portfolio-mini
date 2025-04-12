// import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '../pages/HomePage.vue'
// import RnDPage from '../pages/RnDPage.vue'
// import AboutPage from '../pages/AboutPage.vue'
// import ProjectPage from '../pages/ProjectPage.vue'

// const routes = [
//   { path: '/', component: HomePage },
//   { path: '/RnD', component: RnDPage },
//   { path: '/About', component: AboutPage },
//   { path: '/:id', component: ProjectPage },
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
//   scrollBehavior() {
//     // always scroll to top
//     return { top: 0 }
//   },
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import RnDPage from '../pages/RnDPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ProjectPage from '../pages/ProjectPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/RnD', component: RnDPage },
  { path: '/About', component: AboutPage },
  {
    path: '/:id',
    name: 'ProjectPage',
    component: ProjectPage,
    // props: true, // optional: passes `id` as a prop
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
