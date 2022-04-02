<template>
  <!-- 公用Tabs组件 -->
  <div class="tabs" :style="{ 'justify-content': position }">
    <span v-if="title" class="title">{{ `${title}：` }}</span>
    <template v-for="item in tabsConfig" :key="item.value">
      <span
        class="tabs-item"
        :class="{ isActive: modelValue === item.value, isDividing: isDividing }"
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
    isDividing?: boolean
    title?: string
    position?: string
  }>(),
  {
    isDividing: false,
    position: 'flex-start'
  }
)

const emit = defineEmits(['update:modelValue'])
const handleTabClick = (value: string | number) => {
  emit('update:modelValue', value)
}
</script>

<style lang="less" scoped>
.tabs {
  .display-flex(@align-items: center);
  .title {
    color: var(--font-color);
    font-size: @font-size-sm;
  }
  .tabs-item {
    .display-flex(center, center);
    color: var(--font-color-tab);
    font-size: @font-size-sm;
    cursor: pointer;
    width: 50px;
    margin: 15px 0;
    &.isActive {
      color: @color-main;
    }
    &.isDividing {
      width: auto;
      padding: 4px 12px;
      margin: 10px 16px;
      &.isActive {
        background-color: var(--color-tabs-bgcolor);
        border-radius: 8px;
      }
    }
  }
}
</style>
