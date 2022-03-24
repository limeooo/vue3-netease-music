<template>
  <!-- 顶部 -->
  <Header />
  <!-- 左边菜单 -->
  <Menu />
  <!-- 底部播放 -->
  <Player />
  <!-- 主内容 -->
  <div class="page-content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
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
