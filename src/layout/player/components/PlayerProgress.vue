<template>
  <div class="player-progress">
    <el-slider
      v-model="currentTime"
      :show-tooltip="false"
      :min="0"
      :max="duration"
      size="small"
      @change="handelChangeProgress()"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, withDefaults, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    currentTime: number
    duration: number
  }>(),
  {}
)

// 监听当前音乐播放进度改变进度条进度
const currentTime = ref(0)
watch(
  () => props.currentTime,
  (newVal) => {
    currentTime.value = newVal
  }
)

// 监听进度条点击更新进度时间
const emit = defineEmits(['update:currentTime'])
const handelChangeProgress = () => {
  if (currentTime.value) emit('update:currentTime', currentTime.value)
}
</script>

<style lang="less" scoped>
.player-progress {
  position: absolute;
  width: 100%;
  left: 0;
  top: -13px;
  :deep(.el-slider) {
    .el-slider__runway {
      height: 3px;
      .el-slider__bar {
        background-color: var(--color-main);
        height: 3px;
      }
      .el-slider__button {
        opacity: 0;
        height: 15px;
        width: 15px;
        border: 0;
        background-color: var(--color-main);
      }
    }
    &:hover .el-slider__runway .el-slider__button {
      opacity: 1;
    }
  }
}
</style>
