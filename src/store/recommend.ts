/**
 * 推荐歌单页面 请求存储数据仓库
 */
import { defineStore } from 'pinia'
import { requestTopPlaylistHighquality } from '@/service/recommend'
import type { IPlaylistAll } from '@/service/recommend/types'

const useRecommendStore = defineStore('recommend', {
  state: () => {
    return {
      topPlaylist: {} as IPlaylistAll
    }
  },
  actions: {
    getRecommendData() {
      this.getTopPlaylistHighquality()
    },
    async getTopPlaylistHighquality() {
      const topPlaylist = await requestTopPlaylistHighquality({ limit: 1 })
      this.$patch((state) => {
        state.topPlaylist = topPlaylist
      })
    }
  }
})

export default useRecommendStore
