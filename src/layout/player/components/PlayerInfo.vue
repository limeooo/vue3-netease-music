<template>
  <div class="player-info">
    <div class="info-image" @click="handleLyricClick()">
      <img :src="thumbnail(currentPlayerSong.picUrl, 80)" />
      <div class="background-mask">
        <SvgIcon v-if="isOpenLyric" name="shrink" size="22" color="#fff" />
        <SvgIcon v-else name="expand" size="22" color="#fff" />
      </div>
    </div>
    <div class="info-text">
      <span class="title">
        <span class="album">{{ currentPlayerSong.name }}</span>
        <span class="separator">-</span>
        <span class="artists">{{ currentPlayerSong.artists }}</span>
      </span>
      <span class="time">
        <span>{{ formatSecondsDuration(currentTime) }}</span>
        <span class="separator">/</span>
        <span>{{ formatSecondsDuration(duration) }}</span>
      </span>
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
  height: 40px;
  .info-image {
    .display-flex(center, center);
    .image-size(40px);
    position: relative;
    cursor: pointer;
    .background-mask {
      .position(0, 0, 0, 0, absolute);
      .display-flex(center, center);
      background-color: @color-avtive-background-dark;
    }
  }
  .info-text {
    .display-flex(space-between,@flex-direction: column);
    width: 300px;
    height: 100%;
    padding-left: 10px;
    .title {
      .display-flex(flex-start, flex-end);
      .text-ellipsis();
      width: 100%;
      line-height: @font-size;
      .album {
        color: var(--font-color-title);
        font-size: @font-size;
      }
      .separator,
      .artists {
        color: var(--font-color);
        font-size: @font-size-sm;
      }
      .separator {
        padding: 0 4px;
      }
    }
    .time {
      .display-flex(flex-start, flex-end);
      color: var(--font-color);
      font-size: @font-size-sm;
      .separator {
        padding: 0 8px;
      }
    }
  }
}
</style>
