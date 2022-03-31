<template>
  <div class="play-list-item" @click="handlePlaylistClick()">
    <div class="card-inner">
      <img v-lazy="thumbnail(playlistItem.picUrl, 480)" />
      <div class="count">
        {{ '播放量：' + formatCount(playlistItem.playCount) }}
      </div>
      <div class="play">
        <SvgIcon name="player-play-empty" size="20" color="#f63434" />
      </div>
    </div>
    <div class="card-outside">
      {{ playlistItem.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { withDefaults } from 'vue'
import { useRouter } from 'vue-router'
import { thumbnail, formatCount } from '@/utils'
import type { IPlaylist } from '@/service/playlist/types'

const props = withDefaults(
  defineProps<{
    playlistItem: IPlaylist
  }>(),
  {}
)

const router = useRouter()
const handlePlaylistClick = () => {
  router.push({ path: `/playlist/${props.playlistItem.id}` })
}
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
      .position(0, auto, auto, 0, absolute);
      color: #fff;
      background-color: @color-avtive-background-dark;
      font-size: @font-size;
      width: 100%;
      padding: 10px 6px;
      transition: all 0.3s;
      transform: translateY(-100%);
    }
    .play {
      .position(auto, 8px, 8px, auto, absolute);
      .display-flex(center,center);
      .border-radius(36px);
      background-color: @color-avtive-background-white;
      transition: all 0.3s;
      opacity: 0;
    }
  }
  .card-outside {
    .text-ellipsis();
    color: var(--font-color);
    font-size: @font-size-sm;
    margin: 4px 4px 0;
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
