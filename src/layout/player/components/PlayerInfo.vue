<template>
  <div class="player-info">
    <div class="info-image" @click="handleLyricClick()">
      <img :src="thumbnail(playSong.picUrl, 40)" />
      <div class="background-mask">
        <SvgIcon v-if="isOpenLyric" name="shrink" size="22" />
        <SvgIcon v-else name="expand" size="22" />
      </div>
    </div>
    <div class="info-text">
      <div class="title">
        <span class="album">{{ playSong.album }}</span>
        <span class="separator">-</span>
        <span class="artists">{{ playSong.artists }}</span>
      </div>
      <div class="time">
        <span>{{ formatSecondsDuration(currentTime) }}</span>
        <span class="separator">/</span>
        <span>{{ formatSecondsDuration(duration) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { withDefaults } from 'vue'
import { thumbnail, formatSecondsDuration } from '@/utils'
import type { ISong } from '@/service/song/types'

withDefaults(
  defineProps<{
    playSong: ISong
    currentTime: number
    duration: number
    isOpenLyric: boolean
  }>(),
  {}
)

const emit = defineEmits(['handleLyricClick'])
const handleLyricClick = () => {
  emit('handleLyricClick')
}
</script>

<style lang="less" scoped>
.player-info {
  display: flex;
  align-items: center;
  .info-image {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    .background-mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: var(--color-avtive-background-dark);
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        color: #fff;
      }
    }
  }
  .info-text {
    height: 44px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      .album {
        font-size: 13px;
        font-weight: 500;
        color: var(--color-text-title);
      }
      .separator,
      .artists {
        color: var(--color-text);
      }
      .separator {
        padding: 0 4px;
      }
      .artists {
        font-size: 12px;
      }
    }
    .time {
      font-size: 12px;
      color: var(--color-text);
      .separator {
        padding: 8px;
      }
    }
  }
}
</style>
