import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import LayoutComponent from '@/layout/Layout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/',
    redirect: '/discovery',
    component: LayoutComponent,
    children: [
      {
        path: '/discovery',
        name: 'discovery',
        component: () => import('@/views/discovery/discovery.vue')
      },
      {
        path: '/recommend',
        name: 'recommend',
        component: () => import('@/views/recommend/recommend.vue')
      },
      {
        path: '/latest',
        name: 'latest',
        component: () => import('@/views/latest/latest.vue')
      },
      {
        path: '/playlist/:id',
        name: 'playlist',
        component: () => import('@/views/playlistdetail/playlistdetail.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
