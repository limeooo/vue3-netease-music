<template>
  <!-- 歌曲列表展示封装组件 -->
  <div class="song-list">
    <div class="player-all-button">
      <span @click="handleAllSongClick()">播放全部</span>
    </div>
    <template v-for="item in songList" :key="item.id">
      <SongListItem
        :song-item="item"
        :current-player-song="currentPlayerSong"
        @click="handleSongClick(item)"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import SongListItem from './SongListItem.vue'

import { withDefaults } from 'vue'
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/store'
import type { ISong } from '@/service/song/types'

const props = withDefaults(
  defineProps<{
    songList: ISong[]
  }>(),
  {}
)

const playerStore = usePlayerStore()
const { currentPlayerSong } = storeToRefs(playerStore)

// 监听歌曲点击将歌曲添加到播放列表
const handleSongClick = (song: ISong) => {
  playerStore.pushPlayerSong(song)
}

// 监听按钮点击将所有歌曲添加到播放列表
const handleAllSongClick = () => {
  playerStore.pushPlayerAllSong([...props.songList])
}
</script>

<style lang="less" scoped>
.song-list {
  .player-all-button {
    display: flex;
    justify-content: flex-end;
    margin: 5px 5px 10px;
    span {
      display: inline-block;
      padding: 7px 12px;
      background-color: var(--color-main);
      font-size: 14px;
      color: var(--color-text-white);
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
