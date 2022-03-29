<template>
  <div class="player-volume">
    <el-badge :is-dot="currentPlayerSongList?.length > 0">
      <SvgIcon name="player-list" size="20" @click="handleOpenPlayerList()" />
    </el-badge>
    <SvgIcon
      v-if="volume === 0"
      name="player-volume-close"
      size="20"
      @click="handleOpenVolume()"
    />
    <SvgIcon
      v-else
      name="player-volume"
      size="20"
      @click="handleCloseVolume()"
    />
    <el-slider
      v-model="currentVolume"
      :show-tooltip="false"
      :min="0"
      :max="1"
      :step="0.01"
      class="player-volume-slider"
      @input="handleSongVolumeClick()"
    />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { ref, withDefaults } from 'vue'
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/store'

withDefaults(
  defineProps<{
    volume: number
  }>(),
  {}
)

// 监听声音改变更新当前音量
const currentVolume = ref(1)
const emit = defineEmits(['update:volume'])
const handleSongVolumeClick = () => {
  emit('update:volume', currentVolume.value)
}
const handleOpenVolume = () => {
  emit('update:volume', currentVolume.value)
}
const handleCloseVolume = () => {
  emit('update:volume', 0)
}

// 监听播放列表打开事件
const playerStore = usePlayerStore()
const { currentPlayerSongList, isOpenPlayerList } = storeToRefs(playerStore)
const handleOpenPlayerList = () => {
  isOpenPlayerList.value = !isOpenPlayerList.value
}
</script>

<style lang="less" scoped>
.player-volume {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  .icon {
    cursor: pointer;
  }
  .player-volume-slider {
    width: 150px;
    padding-right: 20px;
    :deep(.el-slider__runway) {
      height: 3px;
      .el-slider__bar {
        background-color: var(--color-main);
        height: 3px;
      }
      .el-slider__button {
        height: 15px;
        width: 15px;
        border: 0;
        background-color: var(--color-main);
      }
    }
  }
}
</style>
