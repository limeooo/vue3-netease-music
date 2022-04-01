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
    <template v-if="createPlaylist.length > 0">
      <p class="menu-title">创建的歌单</p>
      <template v-for="item in createPlaylist" :key="item.id">
        <router-link
          class="menu-list-item"
          :to="{ path: `/userplaylist/${item.id}` }"
        >
          <SvgIcon name="menu-icon-0" />
          <span class="title">{{ item.name }}</span>
        </router-link>
      </template>
    </template>
    <template v-if="collectPlaylist.length > 0">
      <p class="menu-title">收藏的歌单</p>
      <template v-for="item in collectPlaylist" :key="item.id">
        <router-link
          class="menu-list-item"
          :to="{ path: `/userplaylist/${item.id}` }"
        >
          <SvgIcon name="menu-icon-0" />
          <span class="title">{{ item.name }}</span>
        </router-link>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { useUserStore } from '@/store'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { createPlaylist, collectPlaylist } = storeToRefs(userStore)
</script>

<style lang="less" scoped>
.menu-list {
  .display-flex(@flex-direction:column);
  height: 100%;
  padding-bottom: 100px;
  overflow: hidden;
  overflow-y: auto;
  .menu-list-item {
    .display-flex(@align-items: center);
    width: 100%;
    height: 42px;
    padding: 12px 15px;
    .icon {
      .display-flex(center,center);
      margin-right: 10px;
    }
    &:hover {
      background-color: var(--color-active-bgcolor);
    }
    &.router-link-active {
      background-color: var(--color-active-bgcolor);
      color: @color-main;
    }
    .title {
      .text-ellipsis();
      font-size: @font-size-sm-medium;
    }
  }
  .menu-title {
    color: var(--font-color);
    font-size: @font-size-sm;
    margin: 16px 0 8px 16px;
    opacity: 0.7;
  }
}
</style>
