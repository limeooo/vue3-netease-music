<template>
  <svg class="icon" aria-hidden="true" :style="getStyle">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'
import type { CSSProperties } from 'vue'

const props = withDefaults(
  defineProps<{
    prefix: string
    name: string
    color: string
    size: number | string
  }>(),
  {
    prefix: 'icon',
    color: '#333',
    size: 16
  }
)

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const getStyle = computed((): CSSProperties => {
  const { size } = props
  let s = `${size}`
  s = `${s.replace('px', '')}px`
  return {
    width: s,
    height: s
  }
})
</script>

<style lang="less" scoped>
.icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.3em;
  fill: currentcolor;
}
</style>
