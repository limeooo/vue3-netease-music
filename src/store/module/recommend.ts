/**
 * 推荐歌单页面 请求存储数据仓库
 */
import { defineStore } from 'pinia'
import {
  requestTopPlaylistHighquality,
  requestTopPlaylist
} from '@/service/recommend'
import type { IPlaylistAll } from '@/service/recommend/types'

const useRecommendStore = defineStore('recommend', {
  state: () => {
    return {
      playlist: {} as IPlaylistAll,
      topPlaylist: {} as IPlaylistAll
    }
  },
  actions: {
    getRecommendData() {
      this.getTopPlaylistHighquality({ limit: 1 })
      this.getTopPlaylist({ cat: '全部', offset: 0 })
    },
    async getTopPlaylistHighquality(params: { limit: number }) {
      const topPlaylist = await requestTopPlaylistHighquality(params)
      this.$patch((state) => {
        state.topPlaylist = topPlaylist
      })
    },
    async getTopPlaylist(params: { cat: string; offset: number }) {
      const playlist = await requestTopPlaylist(params)
      this.$patch((state) => {
        state.playlist = playlist
      })
    }
  }
})

export default useRecommendStore
