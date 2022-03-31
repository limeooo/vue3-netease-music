<template>
  <div class="player-info">
    <div class="info-image" @click="handleLyricClick()">
      <img :src="thumbnail(currentPlayerSong.picUrl, 40)" />
      <div class="background-mask">
        <SvgIcon v-if="isOpenLyric" name="shrink" size="22" color="#fff" />
        <SvgIcon v-else name="expand" size="22" color="#fff" />
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
  .display-flex(@align-items: center);
  .info-image {
    .image-size(40px);
    position: relative;
    cursor: pointer;
    .background-mask {
      .position(0, 0, 0, 0, absolute);
      .display-flex(center,center);
      background-color: @color-avtive-background-dark;
    }
  }
  .info-text {
    .display-flex(space-between,@flex-direction: column);
    height: 44px;
    padding-left: 10px;
    .title {
      overflow: hidden;
      height: 14px;
      .album {
        color: var(--font-color-title);
        font-size: @font-size;
      }
      .separator,
      .artists {
        color: var(--font-color);
      }
      .separator {
        padding: 0 4px;
      }
      .artists {
        font-size: @font-size-sm;
      }
    }
    .time {
      color: var(--font-color);
      font-size: @font-size-sm;
      .separator {
        padding: 8px;
      }
    }
  }
}
</style>
