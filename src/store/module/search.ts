/**
 * 搜索页面 存储请求数据
 */
import { defineStore } from 'pinia'
import { requestSearchHot, requestSearch } from '@/service/search'
import { useLocalStorage } from '@vueuse/core'
import { SearchType } from '@/service/search/types'
import type { ISearchParams } from '@/service/search/types'
import type { ISongAll } from '@/service/song/types'
import type { IPlaylistAll } from '@/service/playlist/types'
import type { IMvAll } from '@/service/mv/types'

const SEARCH_KEY = 'vnext-netease-music-search-hot'

const useSearchStore = defineStore('search', {
  state: () => {
    return {
      searchSong: {} as ISongAll,
      searchPlaylist: {} as IPlaylistAll,
      searchMv: {} as IMvAll,
      searchHotList: [] as string[],
      searchHistory: [] as string[]
    }
  },
  actions: {
    async getSearchResult(params: ISearchParams) {
      const searchResult = await requestSearch(params)
      this.$patch((state) => {
        switch (params.type) {
          case SearchType.song:
            state.searchSong = searchResult as ISongAll
            break
          case SearchType.playlist:
            state.searchPlaylist = searchResult as IPlaylistAll
            break
          case SearchType.mv:
            state.searchMv = searchResult as IMvAll
            break
        }
      })
    },
    async getSearchHot() {
      const searchHotList = await requestSearchHot()
      this.$patch((state) => {
        state.searchHotList = searchHotList
      })
    },
    getSearchHistory() {
      this.$patch((state) => {
        state.searchHistory = useLocalStorage(SEARCH_KEY, []).value
      })
    },
    setSearchHistory(value: string) {
      this.$patch((state) => {
        if (state.searchHistory.findIndex((item) => item === value) < 0)
          state.searchHistory.push(value)
      })
      useLocalStorage(SEARCH_KEY, this.searchHistory)
    }
  }
})

export default useSearchStore
