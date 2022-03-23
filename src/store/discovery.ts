import { defineStore } from 'pinia'
import { requestBanner } from '@/service/discovery'
import { Banner } from '@/service/discovery/banner-types'

const useDiscoveryStore = defineStore('discovery', {
  state: () => {
    return {
      bannerList: [] as Banner[]
    }
  },
  actions: {
    getDiscovery() {
      this.getBannerList()
    },
    async getBannerList() {
      const { banners } = await requestBanner()
      this.$patch((state) => {
        state.bannerList = banners
      })
    }
  }
})

export default useDiscoveryStore
