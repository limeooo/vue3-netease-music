/**
 * 播放音乐 存储数据仓库
 */
import { defineStore } from 'pinia'
import { requestSongLyric } from '@/service/song'
import type { ISong } from '@/service/song/types'

const usePlayerStore = defineStore('player', {
  state: () => {
    return {
      // 判定打开歌词才加载评论
      isLodingComment: false,
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
        // 如果歌词打开的时候切换歌曲 则需要加载评论
        if (!state.isOpenLyric) state.isLodingComment = false
      })
    },
    setLyricOpenstatus() {
      this.$patch((state) => {
        state.isOpenLyric = !state.isOpenLyric
        state.isLodingComment = true
      })
    }
  }
})

export default usePlayerStore
