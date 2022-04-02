<template>
  <!-- 公用Tabs组件 -->
  <div class="tabs">
    <span class="title"></span>
    <template v-for="item in tabsConfig" :key="item.value">
      <span
        class="tabs-item"
        :class="{ isActive: modelValue === item.value }"
        @click="handleTabClick(item.value)"
      >
        {{ item.label }}
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import { ITabsConfig } from '@/global/types'

withDefaults(
  defineProps<{
    modelValue: string | number
    tabsConfig: ITabsConfig[]
  }>(),
  {}
)
const emit = defineEmits(['update:modelValue'])

const handleTabClick = (value: string | number) => {
  emit('update:modelValue', value)
}
</script>

<style lang="less" scoped>
.tabs {
  .display-flex(flex-end, center);
  height: 45px;
  .tabs-item {
    .display-flex(center, center);
    color: var(--font-color-tab);
    font-size: @font-size-sm;
    cursor: pointer;
    width: 50px;
    height: 100%;
    &.isActive {
      color: @color-main;
    }
  }
}
</style>
