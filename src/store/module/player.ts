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
      // 歌词是否打开状态
      isOpenLyric: false,
      // 当前播放音乐
      currentPlayerSong: {} as ISong,
      // 当前音乐歌词
      currentLyric: '' as string,
      // 当前音乐播放列表
      currentPlayerSongList: [] as ISong[],
      // 当前音乐在播放列表的Index下标值
      currentPlayerSongIndex: -1 as number
    }
  },
  getters: {},
  actions: {
    // 歌曲切换方法
    togglePlayerSong(order: 1 | -1) {
      // 播放列表只有一首歌曲时不进行切换操作
      if (this.currentPlayerSongList.length === 1) return
      this.$patch((state) => {
        // 若为切换上一首歌曲并且当前为播放序列第一首、则切换到最后一首歌曲
        if (order === -1 && state.currentPlayerSongIndex === 0) {
          state.currentPlayerSongIndex = state.currentPlayerSongList.length - 1
        } else {
          // 其他情况为直接切换、当为最后一首时、%取余切换第一首
          state.currentPlayerSongIndex =
            (state.currentPlayerSongIndex + order) %
            state.currentPlayerSongList.length
        }
      })
      // 设置当前播放音乐
      this.setCurrentPlayerSong()
    },
    // 歌曲列表点击单首歌曲处理事件、添加歌曲到播放列表
    pushPlayerSong(song: ISong) {
      this.$patch((state) => {
        // 寻找当前播放列表是否存在此次点击歌曲，返回下标值
        const songIndex = state.currentPlayerSongList.findIndex(
          (item) => item.id === song.id
        )
        // 如果当前歌曲列表存在 歌曲 则直接播放 否则添加进歌曲列表
        if (songIndex > -1) {
          state.currentPlayerSongIndex = songIndex
        } else {
          state.currentPlayerSongIndex++
          state.currentPlayerSongList.splice(
            state.currentPlayerSongIndex,
            0,
            song
          )
        }
      })
      // 设置当前播放音乐
      this.setCurrentPlayerSong()
    },
    // 设置当前播放音乐
    async setCurrentPlayerSong() {
      const song = this.currentPlayerSongList[this.currentPlayerSongIndex]
      const lyric = await requestSongLyric({ id: song.id })
      this.$patch((state) => {
        state.currentPlayerSong = song
        state.currentLyric = lyric
        // 如果歌词打开的时候切换歌曲 则需要加载评论
        if (!state.isOpenLyric) state.isLodingComment = false
      })
    },
    // 设置歌词打开状态
    setLyricOpenstatus() {
      this.$patch((state) => {
        state.isOpenLyric = !state.isOpenLyric
        state.isLodingComment = true
      })
    }
  }
})

export default usePlayerStore
