<template>
  <!-- 歌曲列表展示封装组件 -->
  <div class="song-list">
    <template v-for="item in songList" :key="item.id">
      <SongListItems :song-item="item" />
    </template>
  </div>
</template>

<script setup lang="ts">
import SongListItems from './SongListItems.vue'

import { withDefaults } from 'vue'
import type { ISong } from '@/service/latest/types'

withDefaults(
  defineProps<{
    songList: ISong[]
  }>(),
  {}
)
</script>
