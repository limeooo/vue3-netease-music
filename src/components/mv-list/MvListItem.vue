<template>
  <div
    class="mv-list-item"
    :class="{ isRelated: related }"
    @click="handleMvClick()"
  >
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
import { useRouter } from 'vue-router'
import { thumbnail, formatCount, formatDuration } from '@/utils'
import type { IMv } from '@/service/mv/types'

const props = withDefaults(
  defineProps<{
    mv: IMv
    related?: boolean
  }>(),
  {
    related: false
  }
)

const router = useRouter()
const handleMvClick = () => {
  router.push({ path: `/mv/${props.mv.id}` })
}
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
    width: 100%;
    .title {
      .text-ellipsis();
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
  &.isRelated {
    .display-flex(@flex-direction: row);
    width: 100%;
    height: 96px;
    padding: 8px 0;
    margin-bottom: 0px;
    .card-inner {
      .image-size(140px,100%);
    }
    .card-outside {
      width: calc(100% - 140px);
      padding-left: 8px;
    }
    &:hover {
      background-color: var(--color-active-bgcolor);
    }
  }
}
</style>
