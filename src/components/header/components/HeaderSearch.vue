<template>
  <div class="header-search">
    <el-input
      v-model="inputValue"
      size="default"
      placeholder="搜索"
      :prefix-icon="Search"
      clearable
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const inputValue = ref('')
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
