<template>
  <!-- 歌曲列表展示封装组件 -->
  <div class="song-list">
    <template v-for="item in songList" :key="item.id">
      <SongListItem :song-item="item" />
    </template>
  </div>
</template>

<script setup lang="ts">
import SongListItem from './SongListItem.vue'

import { withDefaults } from 'vue'
import type { ISong } from '@/service/song/types'

withDefaults(
  defineProps<{
    songList: ISong[]
  }>(),
  {}
)
</script>
