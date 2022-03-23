<template>
  <Header />
  <Menu />
  <Player />
  <div class="page-content">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Header from './header/Header.vue'
import Menu from './menu/Menu.vue'
import Player from './player/Player.vue'
</script>

<style lang="less" scoped>
.page-content {
  position: fixed;
  top: 50px;
  right: 0;
  left: 250px;
  bottom: 60px;
  padding: 20px 30px;
  overflow-y: auto;
  background: var(--color-background);
}
</style>
