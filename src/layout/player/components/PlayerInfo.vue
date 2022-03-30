<template>
  <div class="player-info">
    <div class="info-image" @click="handleLyricClick()">
      <img :src="thumbnail(currentPlayerSong.picUrl, 40)" />
      <div class="background-mask">
        <SvgIcon v-if="isOpenLyric" name="shrink" size="22" />
        <SvgIcon v-else name="expand" size="22" />
      </div>
    </div>
    <div class="info-text">
      <div class="title">
        <span class="album">{{ currentPlayerSong.name }}</span>
        <span class="separator">-</span>
        <span class="artists">{{ currentPlayerSong.artists }}</span>
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
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/store'
import { thumbnail, formatSecondsDuration } from '@/utils'

withDefaults(
  defineProps<{
    currentTime: number
    duration: number
  }>(),
  {}
)

const playerStore = usePlayerStore()
const { currentPlayerSong, isOpenLyric } = storeToRefs(playerStore)

// 监听点击图片打开歌词
const handleLyricClick = () => {
  playerStore.setLyricOpenstatus()
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
      overflow: hidden;
      height: 14px;
      .album {
        font-size: 14px;
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
