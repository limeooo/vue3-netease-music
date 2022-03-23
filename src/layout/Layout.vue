<template>
  <Header />
  <Menu />
  <Player />
  <div class="page-content">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/Header.vue'
import Menu from '@/components/menu/Menu.vue'
import Player from '@/components/player/Player.vue'
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
