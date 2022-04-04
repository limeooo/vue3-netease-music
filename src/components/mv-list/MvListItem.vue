<template>
  <div class="mv-list-item">
    <div class="card-inner">
      <img v-lazy="thumbnail(mv.picUrl, 480, 280)" />
      <div class="play-count">
        <SvgIcon name="player-sm" size="12" color="#fff" />
        <span> {{ formatCount(mv.playCount) }}</span>
      </div>
      <div class="duration">{{ formatDuration(mv.duration) }}</div>
      <div class="play">
        <SvgIcon name="player-play-empty" size="20" color="#f63434" />
      </div>
    </div>
    <div class="card-outside">
      <div class="title">{{ mv.name }}</div>
      <div class="artist">{{ mv.artistName }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { withDefaults } from 'vue'
import { thumbnail, formatCount, formatDuration } from '@/utils'
import type { IMv } from '@/service/mv/types'

withDefaults(
  defineProps<{
    mv: IMv
  }>(),
  {}
)
</script>

<style lang="less" scoped>
.mv-list-item {
  .display-flex(@flex-direction: column);
  width: calc(25% - 16px);
  margin-bottom: 32px;
  cursor: pointer;
  .card-inner {
    position: relative;
    .image-size(100%,150px);
    .play-count {
      .position(5px, 5px, auto, auto, absolute);
      color: white;
      font-size: @font-size-sm;
      .icon {
        margin: 0 3px 2px 0;
      }
    }
    .duration {
      .position(auto, 5px, 5px, auto, absolute);
      color: white;
      font-size: @font-size-sm;
    }
    .play {
      .position(50%, 50%, auto, auto, absolute);
      .display-flex(center,center);
      .border-radius(36px);
      transform: translate(50%, -50%);
      background-color: @color-avtive-background-white;
      transition: all 0.3s;
      opacity: 0;
    }
  }
  .card-outside {
    .title {
      font-size: @font-size-sm;
      color: var(--font-color);
      margin-top: 8px;
    }
    .artist {
      font-size: @font-size-sm;
      color: var(--font-color-describe);
      margin-top: 4px;
    }
  }
  &:hover {
    .card-inner {
      .play {
        opacity: 1;
      }
    }
  }
}
</style>
