<template>
  <div class="menu">
    <MenuUser />
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
  background-color: var(--color-menu-background);
}
</style>
