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
        path: '/playlists',
        name: 'playlists',
        component: () => import('@/views/playlists/playlists.vue')
      },
      {
        path: '/songs',
        name: 'songs',
        component: () => import('@/views/songs/songs.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/about.vue')
      },
      {
        path: '/playlist/:id',
        name: 'playlist',
        component: () => import('@/views/playlistdetail/playlistdetail.vue')
      },
      {
        path: '/search/:keywords',
        name: 'search',
        component: () => import('@/views/searchresult/searchresult.vue')
      },
      {
        path: '/userplaylist/:id',
        name: 'userplaylist',
        component: () => import('@/views/userplaylist/userplaylist.vue')
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
