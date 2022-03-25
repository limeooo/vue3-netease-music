/**
 * 歌单详情页面 存储请求数据
 */
import { defineStore } from 'pinia'
import { requestPlaylistDetail } from '@/service/playlist'
import { requestSongDetail } from '@/service/song'
import type { IPlaylistDetail } from '@/service/playlist/types'
import type { ISong } from '@/service/song/types'

const usePlaylistDetailStore = defineStore('playlistDetail', {
  state: () => {
    return {
      playlistDetail: {} as IPlaylistDetail,
      songList: [] as ISong[]
    }
  },
  actions: {
    async getPlaylistDetailPageData(params: { id: string | number }) {
      this.$reset()
      const playlistDetail = await requestPlaylistDetail(params)
      const songList = await requestSongDetail({ ids: playlistDetail.songIds })
      this.$patch((state) => {
        state.playlistDetail = playlistDetail
        state.songList = songList
      })
    }
  }
})

export default usePlaylistDetailStore
