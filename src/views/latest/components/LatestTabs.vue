<template>
  <div class="tabs">
    <template v-for="item in tabsConfig" :key="item.type">
      <li
        class="tabs-item"
        :class="{ isActive: currentType === item.type }"
        @click="handleTabClick(item.type)"
      >
        {{ item.title }}
      </li>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLatestStore } from '@/store'

const currentType = ref(0)
const tabsConfig = [
  {
    title: '全部',
    type: 0
  },
  {
    title: '华语',
    type: 7
  },
  {
    title: '欧美',
    type: 96
  },
  {
    title: '日本',
    type: 8
  },
  {
    title: '韩国',
    type: 16
  }
]
const latestStore = useLatestStore()
const handleTabClick = (type: number) => {
  currentType.value = type
  latestStore.getTopSongList(type)
}
</script>

<style lang="less" scoped>
.tabs {
  height: 41px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .tabs-item {
    width: 48px;
    list-style: none;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    &.isActive {
      color: var(--color-main);
    }
  }
}
</style>
