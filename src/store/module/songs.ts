/**
 * 最新音乐页面 请求存储数据仓库
 */
import { defineStore } from 'pinia'
import { requestTopSongList } from '@/service/song'
import type { ISong } from '@/service/song/types'

const useSongsStore = defineStore('songs', {
  state: () => {
    return {
      topSongList: [] as ISong[]
    }
  },
  actions: {
    getSongsData() {
      this.getTopSongList({ type: 0 })
    },
    async getTopSongList(params: { type: number }) {
      const topSongList = await requestTopSongList(params)
      this.$patch((state) => {
        state.topSongList = topSongList
      })
    }
  }
})

export default useSongsStore
