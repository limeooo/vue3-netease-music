/**
 * 搜索页面 存储请求数据
 */
import { defineStore } from 'pinia'
import { requestSearchHot } from '@/service/search'
// import { SearchType } from '@/service/search/types'

const useSearchStore = defineStore('search', {
  state: () => {
    return {
      searchHotList: [] as string[]
    }
  },
  actions: {
    async getSearchHot() {
      const searchHotList = await requestSearchHot()
      this.$patch((state) => {
        state.searchHotList = searchHotList
      })
    }
  }
})

export default useSearchStore
