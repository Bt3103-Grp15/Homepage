import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout'

const routes = [
  {
    path: '/',
    name: '/',
    component: layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/index'),
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
