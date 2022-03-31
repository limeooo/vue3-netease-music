<template>
  <div ref="playVolumeRef" class="player-volume">
    <el-badge :is-dot="currentPlayerSongList?.length > 0">
      <SvgIcon name="player-list" size="18" @click="handleOpenPlayerList()" />
    </el-badge>
    <SvgIcon
      :name="volume === 0 ? 'player-volume-close' : 'player-volume'"
      size="24"
      @click="handleChangeVolume()"
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
    <a href="https://github.com/limeooo" target="_blank">
      <SvgIcon name="github" size="24" />
    </a>
    <!-- 歌曲播放列表 -->
    <!-- vue-teleport 将内部内容嵌套到根标签中，
  不受父组件z-index影响布局，导致此组件出现时覆盖了父组件 -->
    <teleport to="#app">
      <PlayerList v-click-outside:[playVolumeRef]="handleClickOutside" />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import PlayerList from './PlayerList.vue'
import SvgIcon from '@/components/base/SvgIcon.vue'

import { ref, withDefaults } from 'vue'
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/store'

const props = withDefaults(
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
const handleChangeVolume = () => {
  emit('update:volume', props.volume === 0 ? currentVolume.value : 0)
}

// 监听播放列表打开事件
const playerStore = usePlayerStore()
const { currentPlayerSongList } = storeToRefs(playerStore)
const handleOpenPlayerList = () => {
  playerStore.isOpenPlayerList = !playerStore.isOpenPlayerList
}

// handleClickOutside 监听元素外的点击事件
const playVolumeRef = ref<HTMLDivElement>()
const handleClickOutside = () => {
  playerStore.isOpenPlayerList = false
}
</script>

<style lang="less" scoped>
.player-volume {
  .display-flex(space-between,center);
  width: 250px;
  .icon {
    cursor: pointer;
  }
  .player-volume-slider {
    width: 150px;
    padding-right: 10px;
    :deep(.el-slider__runway) {
      height: 3px;
      .el-slider__bar {
        background-color: @color-main;
        height: 3px;
      }
      .el-slider__button {
        background-color: @color-main;
        height: 15px;
        width: 15px;
        border: 0;
      }
    }
  }
}
</style>
