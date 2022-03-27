/**
 * 搜索页面 存储请求数据
 */
import { defineStore } from 'pinia'
import { requestSearchHot } from '@/service/search'
import { useLocalStorage } from '@vueuse/core'
// import { SearchType } from '@/service/search/types'

const SEARCH_KEY = 'vnext-netease-music-search-hot'

const useSearchStore = defineStore('search', {
  state: () => {
    return {
      searchHotList: [] as string[],
      searchHistory: [] as string[]
    }
  },
  actions: {
    async getSearchHot() {
      const searchHotList = await requestSearchHot()
      this.$patch((state) => {
        state.searchHotList = searchHotList
      })
    },
    getSearchHistory() {
      this.$patch((state) => {
        state.searchHistory = useLocalStorage(SEARCH_KEY, []) as any as string[]
      })
    },
    setSearchHistory(value: string) {
      this.$patch((state) => {
        state.searchHistory.push(value)
      })
      useLocalStorage(SEARCH_KEY, this.searchHistory)
    }
  }
})

export default useSearchStore
