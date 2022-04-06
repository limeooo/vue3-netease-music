<template>
  <div class="song-list-item">
    <div class="item-order">{{ padZero(songItem.order) }}</div>
    <div class="item-image">
      <img v-lazy="thumbnail(songItem.picUrl, 120)" />
    </div>
    <div
      class="item-text"
      :class="{ isActive: currentPlayerSong.id === songItem.id }"
    >
      <span>{{ songItem.name }}</span>
      <SvgIcon
        name="mv-player"
        v-if="songItem.mvid && songItem.mvid !== 0"
        @click.stop="handleMvClick()"
      />
    </div>
    <div class="item-text">{{ songItem.artists }}</div>
    <div class="item-text">{{ songItem.album }}</div>
    <div class="item-time">{{ formatDuration(songItem.duration) }}</div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { withDefaults } from 'vue'
import { useRouter } from 'vue-router'
import { padZero, formatDuration, thumbnail } from '@/utils'
import type { ISong } from '@/service/song/types'

const props = withDefaults(
  defineProps<{
    songItem: ISong
    currentPlayerSong: ISong
  }>(),
  {}
)

/**
 * 跳转播放Mv
 */
const router = useRouter()
const handleMvClick = () => {
  router.push({ path: `/mv/${props.songItem.mvid}` })
}
</script>

<style lang="less" scoped>
.song-list-item {
  .display-flex(@align-items: center);
  height: 76px;
  padding: 8px 0;
  cursor: pointer;
  &:hover {
    background-color: var(--color-active-bgcolor);
  }
  .item-order,
  .item-time {
    font-size: @font-size-sm;
    width: 60px;
    text-align: center;
  }
  .item-order {
    color: var(--font-color-desc);
  }
  .item-image {
    .image-size(60px);
    margin-right: 8px;
  }
  .item-text {
    .text-ellipsis();
    color: var(--font-color);
    font-size: @font-size-sm;
    flex: 1;
    margin-left: 20px;
    &.isActive {
      color: @color-main;
    }
  }
  .icon-mv-player {
    margin-left: 5px;
  }
}
</style>
