/**
 * 播放音乐 存储数据仓库
 */
import { defineStore } from 'pinia'
import { requestSongLyric } from '@/service/song'
import type { ISong } from '@/service/song/types'

const usePlayerStore = defineStore('player', {
  state: () => {
    return {
      isOpenLyric: false,
      currentPlayerSong: {} as ISong,
      currentLyric: '' as string
    }
  },
  getters: {},
  actions: {
    async setCurrentPlayerSong(song: ISong) {
      const lyric = await requestSongLyric({ id: song.id })
      this.$patch((state) => {
        state.currentPlayerSong = song
        state.currentLyric = lyric
      })
    },
    setLyricOpenstatus() {
      this.$patch((state) => {
        state.isOpenLyric = !state.isOpenLyric
      })
    }
  }
})

export default usePlayerStore
