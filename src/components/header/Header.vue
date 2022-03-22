<template>
  <div class="header">
    <div class="header-left">
      <HeaderButton />
      <HeaderNavgitor />
    </div>
    <HeaderSearch />
  </div>
</template>

<script setup lang="ts">
import HeaderButton from './components/HeaderButton.vue'
import HeaderNavgitor from './components/HeaderNavgitor.vue'
import HeaderSearch from './components/HeaderSearch.vue'
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-left {
    width: 250px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
