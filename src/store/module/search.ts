/**
 * 搜索页面 存储请求数据
 */
import { defineStore } from 'pinia'
import { requestSearchHot, requsetSearch } from '@/service/search'
import { useLocalStorage } from '@vueuse/core'
import { SearchType } from '@/service/search/types'
import type { ISearchParams } from '@/service/search/types'
import type { ISongAll } from '@/service/song/types'
import type { IPlaylistAll } from '@/service/playlist/types'

const SEARCH_KEY = 'vnext-netease-music-search-hot'

const useSearchStore = defineStore('search', {
  state: () => {
    return {
      searchSong: {} as ISongAll,
      searchPlaylist: {} as IPlaylistAll,
      searchHotList: [] as string[],
      searchHistory: [] as string[]
    }
  },
  actions: {
    async getSearchResult(params: ISearchParams) {
      const searchResult = await requsetSearch(params)
      this.$patch((state) => {
        switch (params.type) {
          case SearchType.song:
            state.searchSong = searchResult as ISongAll
            break
          case SearchType.playlist:
            state.searchPlaylist = searchResult as IPlaylistAll
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
