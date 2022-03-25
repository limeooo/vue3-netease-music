<template>
  <div class="play-list-item">
    <div class="card-inner">
      <img v-lazy="thumbnail(playlistItem.picUrl, 480)" />
      <div class="count">
        {{ '播放量：' + formatCount(playlistItem.playCount) }}
      </div>
      <div class="play">
        <SvgIcon name="player-play-empty" size="20" />
      </div>
    </div>
    <div class="card-outside text-ellipsis">
      {{ playlistItem.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { withDefaults } from 'vue'
import { thumbnail, formatCount } from '@/utils'
import type { IPlaylist } from '@/service/recommend/types'

withDefaults(
  defineProps<{
    playlistItem: IPlaylist
  }>(),
  {}
)
</script>

<style lang="less" scoped>
.play-list-item {
  overflow: hidden;
  cursor: pointer;
  // &:hover {

  // }
  .card-inner {
    position: relative;
    img {
      width: 100%;
    }
    .count {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 6px;
      background-color: var(--color-avtive-background-dark);
      font-size: 12px;
      color: var(--color-text-white);
      transition: all 0.3s;
      transform: translateY(-100%);
    }
    .play {
      position: absolute;
      right: 8px;
      bottom: 8px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: var(--color-avtive-background-white);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      opacity: 0;
    }
  }
  .card-outside {
    margin: 4px 4px 0;
    font-size: 12px;
    color: var(--color-text);
  }
  &:hover {
    .card-inner {
      .count {
        transform: translateY(0);
      }
      .play {
        opacity: 1;
      }
    }
  }
}
</style>
