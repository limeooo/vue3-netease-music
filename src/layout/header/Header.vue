<template>
  <div class="header">
    <div class="header-left">
      <!-- 左上角按钮 -->
      <HeaderButton />
      <!-- 前进后退 -->
      <HeaderNavgitor />
    </div>
    <div class="header-right">
      <!-- 搜索 -->
      <HeaderSearch />
      <!-- 切换主题 -->
      <HeaderTheme />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderButton from './components/HeaderButton.vue'
import HeaderNavgitor from './components/HeaderNavgitor.vue'
import HeaderSearch from './components/HeaderSearch.vue'
import HeaderTheme from './components/HeaderTheme.vue'
</script>

<style lang="less" scoped>
.header {
  .position(0, 0, auto, 0);
  .display-flex(space-between, center);
  background-color: var(--layout-header-bgcolor);
  z-index: @z-index-header;
  height: 50px;
  .header-left {
    .display-flex(space-between);
    width: 250px;
  }
  .header-right {
    .display-flex(space-between,center);
    padding-right: 40px;
    width: 250px;
  }
}
</style>
