import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout'),
    children: [
      {
        path: '/sys-users',
        name: 'sys-users',
        component: () => import('../views/sys-users')
      },
      {
        path: '/sys-roles',
        name: 'sys-roles',
        component: () => import('../views/sys-roles')
      },
      {
        path: '/sys-menus',
        name: 'sys-menus',
        component: () => import('../views/sys-menus')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
