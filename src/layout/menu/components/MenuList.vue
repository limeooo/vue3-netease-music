<template>
  <div class="menu-list">
    <router-link class="menu-list-item" to="/discovery">
      <SvgIcon name="menu-icon-1" />
      <span class="title">发现音乐</span>
    </router-link>
    <router-link class="menu-list-item" to="/recommend">
      <SvgIcon name="menu-icon-2" />
      <span class="title">推荐歌单</span>
    </router-link>
    <router-link class="menu-list-item" to="/latest">
      <SvgIcon name="menu-icon-3" />
      <span class="title">最新音乐</span>
    </router-link>
    <router-link class="menu-list-item" to="/about">
      <SvgIcon name="menu-icon-4" />
      <span class="title">关于项目</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'
</script>

<style lang="less" scoped>
.menu-list {
  .display-flex(@flex-direction:column);
  padding-top: 20px;
  .menu-list-item {
    .display-flex(@align-items: center);
    width: 100%;
    height: 42px;
    padding: 12px 15px;
    .icon {
      margin: 0 10px 2.5px 0;
    }
    &:hover {
      background-color: var(--color-active-bgcolor);
    }
    &.router-link-active {
      background-color: var(--color-active-bgcolor);
      color: @color-main;
    }
    .title {
      font-size: @font-size-sm-medium;
    }
  }
}
</style>
