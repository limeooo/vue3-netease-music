<template>
  <div class="player-control">
    <el-tooltip content="暂未开发" placement="top">
      <SvgIcon name="player-prev" size="26" />
    </el-tooltip>
    <SvgIcon
      v-if="playing"
      name="player-pause"
      size="42"
      class="center"
      @click="handleSongStatusClick()"
    />
    <SvgIcon
      v-else
      name="player-play"
      size="42"
      class="center"
      @click="handleSongStatusClick()"
    />
    <el-tooltip content="暂未开发" placement="top">
      <SvgIcon name="player-next" size="26" />
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { withDefaults, defineProps, defineEmits } from 'vue'

const props = withDefaults(
  defineProps<{
    playing: boolean
  }>(),
  {}
)
const emit = defineEmits(['update:playing'])
const handleSongStatusClick = () => {
  emit('update:playing', !props.playing)
}
</script>

<style lang="less" scoped>
.player-control {
  display: flex;
  align-items: center;
  cursor: pointer;
  .center {
    margin: 0 10px;
  }
}
</style>
