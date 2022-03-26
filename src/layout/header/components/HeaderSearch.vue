<template>
  <div ref="headerSearchRef" class="header-search">
    <el-input
      v-model="inputValue"
      size="default"
      placeholder="搜索"
      :prefix-icon="Search"
      clearable
      @focus="isFocus = true"
    />
    <HeaderSearchTags v-show="isFocus" />
  </div>
</template>

<script setup lang="ts">
import HeaderSearchTags from './HeaderSearchTags.vue'

import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { Search } from '@element-plus/icons-vue'

const inputValue = ref('')
const isFocus = ref(false)
const headerSearchRef = ref<HTMLDivElement>()
/**
 * "onClickOutside" 监听元素外的点击事件
 */
onClickOutside(headerSearchRef, () => {
  isFocus.value = false
})
</script>

<style lang="less" scoped>
.header-search {
  padding-right: 30px;
  :deep(.el-input) {
    font-size: 12px;
  }
  :deep(.el-input__inner) {
    width: 172px;
    height: 28px;
    transition: 0.5s;
    &:focus {
      box-shadow: 0 0 0 1px var(--color-main) inset;
    }
  }
  :deep(.el-input__prefix-inner) {
    display: flex;
    align-items: center;
  }
}
</style>
