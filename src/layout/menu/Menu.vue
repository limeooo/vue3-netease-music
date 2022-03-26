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
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 60px;
  width: 250px;
  z-index: var(--z-index-menu);
  background-color: var(--color-menu-background);
}
</style>
