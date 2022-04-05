<template>
  <!-- 顶部 -->
  <Header />
  <!-- 左边菜单 -->
  <Menu v-show="!$route.fullPath.startsWith('/mv/')" />
  <!-- 底部播放 -->
  <Player />
  <!-- 主内容 -->
  <div
    class="page-content"
    :class="{ 'full-page-content': $route.fullPath.startsWith('/mv/') }"
  >
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
  .position(50px, 0, 60px, 250px);
  background: var(--layout-content-bgcolor);
  padding: 20px 30px;
  overflow-y: auto;
  &.full-page-content {
    .position(auto, auto, auto, auto, static) !important;
    padding: 70px 30px 80px;
  }
}
</style>
