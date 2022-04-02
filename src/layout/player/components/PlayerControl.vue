<template>
  <div class="player-control">
    <SvgIcon
      name="player-prev"
      size="30"
      color="#f63434"
      @click="handleToggleSong(ToggleOrder.pre)"
    />
    <SvgIcon
      v-if="playing"
      name="player-pause"
      size="58"
      class="center"
      @click="handleSongStatusClick()"
    />
    <SvgIcon
      v-else
      name="player-play"
      size="54"
      class="center"
      @click="handleSongStatusClick()"
    />
    <SvgIcon
      name="player-next"
      size="30"
      color="#f63434"
      @click="handleToggleSong(ToggleOrder.next)"
    />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { withDefaults } from 'vue'
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/store'
import { ToggleOrder } from '@/global/config'

const props = withDefaults(
  defineProps<{
    playing: boolean
  }>(),
  {}
)

const playerStore = usePlayerStore()
const { currentPlayerSongList } = storeToRefs(playerStore)

// 监听切换播放状态
const emit = defineEmits(['update:playing'])
const handleSongStatusClick = () => {
  if (currentPlayerSongList.value.length > 0)
    emit('update:playing', !props.playing)
}

// 监听切换按钮 切换歌曲
const handleToggleSong = (order: ToggleOrder) => {
  if (currentPlayerSongList.value.length > 0)
    playerStore.togglePlayerSong(order)
}
</script>

<style lang="less" scoped>
.player-control {
  .display-flex(@align-items: center);
  cursor: pointer;
  // .center {
  //   margin: 0 5px;
  // }
}
</style>
