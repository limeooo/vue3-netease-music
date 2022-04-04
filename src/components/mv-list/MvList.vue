<template>
  <!-- Mv 视频列表 -->
  <div class="mv-list">
    <template v-for="item in mvList" :key="item.id">
      <MvListItem :mv="item" />
    </template>
  </div>
</template>

<script setup lang="ts">
import MvListItem from './MvListItem.vue'

import { withDefaults } from 'vue'
import type { IMv } from '@/service/mv/types'

withDefaults(
  defineProps<{
    mvList: IMv[]
  }>(),
  {}
)
</script>

<style lang="less" scoped>
.mv-list {
  .display-flex(space-between);
  flex-wrap: wrap;
}
</style>
