import { defineStore } from 'pinia'
import type { ISong } from '@/service/latest/types'

const usePlayerStore = defineStore('player', {
  state: () => {
    return {
      currentPlayerSong: {} as ISong
    }
  },
  getters: {},
  actions: {
    setCurrentPlayerSong(song: ISong) {
      this.$patch((state) => {
        state.currentPlayerSong = song
      })
    }
  }
})

export default usePlayerStore
