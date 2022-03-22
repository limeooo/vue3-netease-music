import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
