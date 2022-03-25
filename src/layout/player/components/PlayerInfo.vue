<template>
  <div class="player-info">
    <div class="info-image">
      <img :src="thumbnail(playSong.picUrl, 40)" />
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
import { withDefaults } from 'vue'
import { thumbnail, formatSecondsDuration } from '@/utils'
import type { ISong } from '@/service/song/types'

withDefaults(
  defineProps<{
    playSong: ISong
    currentTime: number
    duration: number
  }>(),
  {}
)
</script>

<style lang="less" scoped>
.player-info {
  display: flex;
  align-items: center;
  .info-image {
    width: 40px;
    height: 40px;
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
