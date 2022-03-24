/**
 * 发现音乐页面 请求存储数据仓库
 */
import { defineStore } from 'pinia'
import { requestBanner } from '@/service/discovery'
import type { IBanner } from '@/service/discovery/types'

const useDiscoveryStore = defineStore('discovery', {
  state: () => {
    return {
      bannerList: [] as IBanner[]
    }
  },
  actions: {
    getDiscoveryData() {
      this.getBannerList()
    },
    async getBannerList() {
      const bannerList = await requestBanner()
      this.$patch((state) => {
        state.bannerList = bannerList
      })
    }
  }
})

export default useDiscoveryStore
