<template>
  <div class="song-list-item" @click="handleSongClick(songItem)">
    <div class="item-order">{{ padZero(songItem.order) }}</div>
    <div class="item-image">
      <img v-lazy="thumbnail(songItem.picUrl, 60)" />
    </div>
    <div
      class="item-text text-ellipsis"
      :class="{ isActive: playerSong.id === songItem.id }"
    >
      {{ songItem.name }}
    </div>
    <div class="item-text text-ellipsis">{{ songItem.artists }}</div>
    <div class="item-text text-ellipsis">{{ songItem.album }}</div>
    <div class="item-time">{{ formatDuration(songItem.duration) }}</div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, computed } from 'vue'
import { padZero, formatDuration, thumbnail } from '@/utils'
import { usePlayerStore } from '@/store'
import type { ISong } from '@/service/latest/types'

withDefaults(
  defineProps<{
    songItem: ISong
  }>(),
  {}
)

const playerStore = usePlayerStore()
const playerSong = computed(() => playerStore.currentPlayerSong)
const handleSongClick = (song: ISong) => {
  playerStore.setCurrentPlayerSong(song)
}
</script>

<style lang="less" scoped>
.song-list-item {
  height: 76px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: var(--color-avtive-background-light);
  }
  .item-order,
  .item-time {
    width: 60px;
    font-size: 12px;
    text-align: center;
  }
  .item-order {
    color: var(--color-text-light);
  }
  .item-image {
    width: 60px;
    height: 60px;
    margin-right: 8px;
    img {
      width: 60px;
      height: 60px;
    }
  }
  .item-text {
    flex: 1;
    margin-left: 20px;
    font-size: 12px;
    color: var(--color-text);
    &.isActive {
      color: red;
    }
  }
}
</style>
