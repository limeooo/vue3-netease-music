<template>
  <div class="menu">
    <!-- 菜单 -- 用户 -->
    <MenuUser />
    <!-- 菜单 -- 跳转列表 -->
    <MenuList />
  </div>
</template>

<script setup lang="ts">
import MenuUser from './components/MenuUser.vue'
import MenuList from './components/MenuList.vue'
</script>

<style lang="less" scoped>
.menu {
  .position(50px, auto, 60px, 0);
  background-color: var(--layout-menu-bgcolor);
  z-index: @z-index-menu;
  width: 250px;
}
</style>
