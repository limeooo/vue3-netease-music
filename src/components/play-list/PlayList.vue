<template>
  <!-- 歌单列表公用封装组件 -->
  <div class="play-list">
    <template v-for="item in playlist" :key="item.id">
      <PlayListItem :playlistItem="item" />
    </template>
  </div>
</template>

<script setup lang="ts">
import PlayListItem from './PlayListItem.vue'

import { withDefaults } from 'vue'
import type { IPlaylist } from '@/service/recommend/types'

withDefaults(
  defineProps<{
    playlist: IPlaylist[]
  }>(),
  {}
)
</script>

<style lang="less" scoped>
.play-list {
  .play-list-item {
    display: inline-block;
    width: calc(20% - 8px);
    margin: 4px 4px 32px;
  }
}
</style>
