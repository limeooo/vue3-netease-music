<template>
  <!-- 公用Tabs组件 -->
  <div class="tabs">
    <template v-for="item in tabsConfig" :key="item.value">
      <li
        class="tabs-item"
        :class="{ isActive: currentChecked === item.value }"
        @click="handleTabClick(item.value)"
      >
        {{ item.label }}
      </li>
    </template>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, ref, watchEffect } from 'vue'
import { ITabsConfig } from '@/global/types'

const props = withDefaults(
  defineProps<{
    tabsConfig: ITabsConfig[]
  }>(),
  {}
)
const emit = defineEmits(['handleTabClick'])

const currentChecked = ref<string | number>()

watchEffect(() => {
  currentChecked.value = props.tabsConfig[0].value
})

const handleTabClick = (value: string | number) => {
  currentChecked.value = value
  emit('handleTabClick', value)
}
</script>

<style lang="less" scoped>
.tabs {
  .display-flex(flex-end, center);
  height: 41px;
  .tabs-item {
    color: var(--font-color-tab);
    font-size: @font-size-sm;
    width: 48px;
    list-style: none;
    text-align: center;
    cursor: pointer;
    &.isActive {
      color: @color-main;
    }
  }
}
</style>
