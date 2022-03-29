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
import { ISong } from '@/service/song/types'

const props = withDefaults(
  defineProps<{
    playing: boolean
    currentPlayerSong: ISong
  }>(),
  {}
)

const emit = defineEmits(['update:playing', 'handleToggleSong'])
const handleSongStatusClick = () => {
  if (Object.keys(props.currentPlayerSong).length > 1)
    emit('update:playing', !props.playing)
}
const handleToggleSong = (order: 1 | -1) => {
  if (Object.keys(props.currentPlayerSong).length > 1)
    emit('handleToggleSong', order)
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
