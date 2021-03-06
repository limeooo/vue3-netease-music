/**
 * 发现音乐页面 请求存储数据仓库
 */
import { defineStore } from 'pinia'
import {
  requestBanner,
  requestPersonalizedSong,
  requestPersonalizedPlaylist,
  requestPersonalizedMv
} from '@/service/discovery'
import type { IBanner } from '@/service/discovery/types'
import type { ISong } from '@/service/song/types'
import type { IPlaylist } from '@/service/playlist/types'
import type { IMv } from '@/service/mv/types'

const useDiscoveryStore = defineStore('discovery', {
  state: () => {
    return {
      bannerList: [] as IBanner[],
      songList: [] as ISong[],
      playlistList: [] as IPlaylist[],
      mvList: [] as IMv[]
    }
  },
  actions: {
    getDiscoveryData() {
      this.getBannerList()
      this.getSongList()
      this.getPlaylistList()
      this.getMvList()
    },
    async getBannerList() {
      const bannerList = await requestBanner()
      this.$patch((state) => {
        state.bannerList = bannerList
      })
    },
    async getSongList() {
      const songList = await requestPersonalizedSong({ limit: 20 })
      this.$patch((state) => {
        state.songList = songList
      })
    },
    async getPlaylistList() {
      const playlistList = await requestPersonalizedPlaylist({ limit: 10 })
      this.$patch((state) => {
        state.playlistList = playlistList
      })
    },
    async getMvList() {
      const mvList = await requestPersonalizedMv({ limit: 8 })
      this.$patch((state) => {
        state.mvList = mvList
      })
    }
  }
})

export default useDiscoveryStore
