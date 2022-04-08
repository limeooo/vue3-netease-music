<template>
  <!-- 公用Svg组件，需引入vite-plugin-svg-icons包 ，官网：https://github.com/vbenjs/vite-plugin-svg-icons -->
  <svg
    :width="getStyle.width"
    :height="getStyle.height"
    class="icon"
    :class="className"
    aria-hidden="true"
    :style="getStyle"
  >
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { withDefaults, computed, ref } from 'vue'
import type { CSSProperties } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    prefix?: string
    size?: number | string
    color?: string
  }>(),
  {
    prefix: 'icon',
    size: 16,
    color: document.documentElement.style.getPropertyValue('--font-color')
  }
)

// 动态绑定class
const className = computed(() => `${props.prefix}-${props.name}`)
// 动态绑定id
const symbolId = computed(() => `#${props.prefix}-${props.name}`)

/**
 * 根据屏幕大小获取svg-icon尺寸大小
 */
const _size = ref(16)
const getSize = () => {
  const size = `${props.size}`
  let s = Number(size.replace('px', ''))
  _size.value = (document.documentElement.clientWidth / 1440) * s
}
getSize()

/**
 * 监听屏幕变化改变大小
 */
window.addEventListener('resize', getSize)
const getStyle = computed((): CSSProperties => {
  return {
    width: _size.value,
    height: _size.value
  }
})
</script>

<style lang="less" scoped>
.icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.3em;
  fill: currentColor;
}
</style>
