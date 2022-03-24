/**
 * 最新音乐页面 请求存储数据仓库
 */
import { defineStore } from 'pinia'
import { requestTopSongList } from '@/service/latest'
import type { ISong } from '@/service/latest/types'

const useLatestStore = defineStore('latest', {
  state: () => {
    return {
      topSongList: [] as ISong[]
    }
  },
  actions: {
    getLatestData() {
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

export default useLatestStore