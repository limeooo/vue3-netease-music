/**
 * 播放音乐 存储数据仓库
 */
import { defineStore } from 'pinia'
import { requestSongLyric } from '@/service/latest'
import type { ISong } from '@/service/latest/types'

const usePlayerStore = defineStore('player', {
  state: () => {
    return {
      currentPlayerSong: {} as ISong,
      currenLyric: '' as string
    }
  },
  getters: {},
  actions: {
    async setCurrentPlayerSong(song: ISong) {
      const lyric = await requestSongLyric({ id: song.id })
      this.$patch((state) => {
        state.currentPlayerSong = song
        state.currenLyric = lyric
      })
    }
  }
})

export default usePlayerStore
