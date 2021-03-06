/**
 * 播放音乐 存储数据仓库
 */
import { defineStore } from 'pinia'
import { requestSongLyric } from '@/service/song'
import { ToggleOrder, ToggleType } from '@/global/config'
import type { ISong } from '@/service/song/types'

const usePlayerStore = defineStore('player', {
  state: () => {
    return {
      // 判定打开歌词才加载评论
      isLodingComment: false,
      // 歌词是否打开状态
      isOpenLyric: false,
      // 歌曲列表是否打开状态
      isOpenPlayerList: false,
      // 当前播放音乐
      currentPlayerSong: {} as ISong,
      // 当前音乐歌词
      currentLyric: '' as string,
      // 当前音乐播放列表
      currentPlayerSongList: [] as ISong[],
      // 当前音乐在播放列表的Index下标值
      currentPlayerSongIndex: -1 as number,
      // 当前音乐切换类型
      currentPlayerType: 0 as ToggleType
    }
  },
  actions: {
    // 歌曲切换方法
    togglePlayerSong(order: ToggleOrder) {
      this.$patch((state) => {
        if (state.currentPlayerType === ToggleType.sequential) {
          // 顺序播放的处理方式
          // 若为切换上一首歌曲并且当前为播放序列第一首、则切换到最后一首歌曲
          if (order === ToggleOrder.pre && state.currentPlayerSongIndex === 0) {
            state.currentPlayerSongIndex =
              state.currentPlayerSongList.length - 1
          } else {
            // 其他情况为直接切换、当为最后一首时、%取余切换第一首
            state.currentPlayerSongIndex =
              (state.currentPlayerSongIndex + order) %
              state.currentPlayerSongList.length
          }
        } else if (state.currentPlayerType === ToggleType.random) {
          // 随机播放的处理方式
          // 向下取整获取 0 到 当前播放列表长度-1 之间的随机数
          state.currentPlayerSongIndex = Math.floor(
            Math.random() * state.currentPlayerSongList.length
          )
        }
        // 单曲循环时不处理
      })
      // 设置当前播放音乐
      this.setCurrentPlayerSong()
    },
    // 将所有歌曲添加到播放列表、从第一首开始播放
    pushPlayerAllSong(songList: ISong[]) {
      this.$patch((state) => {
        state.currentPlayerSongList = songList
        state.currentPlayerSongIndex = 0
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
    // 播放列表删除音乐
    deletePlayerSong(index: number) {
      this.$patch((state) => {
        // 删除的是最后一首
        if (state.currentPlayerSongList.length === 1 || index === -1) {
          state.currentPlayerSongList = []
          state.currentPlayerSongIndex = -1
          return
        }
        // 当删除的下标值比当前播放音乐的下标值小、则需要将当前播放音乐下标值-1
        if (state.currentPlayerSongIndex > index) {
          state.currentPlayerSongIndex--
        }
        state.currentPlayerSongList.splice(index, 1)
        this.setCurrentPlayerSong()
      })
    },
    // 设置当前播放音乐
    async setCurrentPlayerSong() {
      const song = this.currentPlayerSongList[this.currentPlayerSongIndex]
      // 当设置的音乐和当前播放音乐为同一首时，不请求数据
      // 此操作用以在页面中watch监听isRestart属性的变化来重置音乐是否播放和播放进度
      if (song.id === this.currentPlayerSong.id) {
        this.currentPlayerSong.isRestart = !this.currentPlayerSong.isRestart
        return
      }
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
    },
    // 设置当前音乐播放类型
    setCurrentPlayerType() {
      this.$patch((state) => {
        state.currentPlayerType = (state.currentPlayerType + 1) % 3
      })
    }
  }
})

export default usePlayerStore
