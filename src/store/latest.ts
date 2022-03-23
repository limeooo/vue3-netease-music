import { defineStore } from 'pinia'
import { requestTopSongList } from '@/service/latest'
import { ISong } from '@/service/latest/types'

const useLatestStore = defineStore('latest', {
  state: () => {
    return {
      topSongList: [] as ISong[]
    }
  },
  actions: {
    getLatestData() {
      this.getTopSongList(0)
    },
    async getTopSongList(type: number) {
      const topSongList = await requestTopSongList(type)
      this.$patch((state) => {
        state.topSongList = topSongList
      })
    }
  }
})

export default useLatestStore
