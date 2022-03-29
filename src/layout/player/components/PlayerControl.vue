<template>
  <div class="player-control">
    <SvgIcon name="player-prev" size="26" @click="handleToggleSong(-1)" />
    <SvgIcon
      v-if="playing"
      name="player-pause"
      size="42"
      class="center"
      @click="handleSongStatusClick()"
    />
    <SvgIcon
      v-else
      name="player-play"
      size="42"
      class="center"
      @click="handleSongStatusClick()"
    />
    <SvgIcon name="player-next" size="26" @click="handleToggleSong(1)" />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { withDefaults } from 'vue'
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/store'

const props = withDefaults(
  defineProps<{
    playing: boolean
  }>(),
  {}
)

const playerStore = usePlayerStore()
const { currentPlayerSong } = storeToRefs(playerStore)

// 监听切换播放状态
const emit = defineEmits(['update:playing'])
const handleSongStatusClick = () => {
  if (Object.keys(currentPlayerSong).length > 1)
    emit('update:playing', !props.playing)
}

// 监听切换按钮 切换歌曲
const handleToggleSong = (order: 1 | -1) => {
  if (Object.keys(currentPlayerSong).length > 1)
    playerStore.togglePlayerSong(order)
}
</script>

<style lang="less" scoped>
.player-control {
  display: flex;
  align-items: center;
  cursor: pointer;
  .center {
    margin: 0 10px;
  }
}
</style>
