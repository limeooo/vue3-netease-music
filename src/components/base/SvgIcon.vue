<template>
  <svg :class="className" aria-hidden="true" :style="getStyle">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'
import type { CSSProperties } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    prefix?: string
    size?: number | string
  }>(),
  {
    prefix: 'icon',
    size: 16
  }
)

const className = computed(() => `${props.prefix}-${props.name}`)
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
