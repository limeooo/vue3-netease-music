<template>
  <div class="menu-list">
    <router-link class="menu-list-item" to="/discovery">
      <el-icon :size="16">
        <Sunny />
      </el-icon>
      <span class="title">发现音乐</span>
    </router-link>
    <router-link class="menu-list-item" to="/recommend">
      <el-icon :size="16">
        <Moon />
      </el-icon>
      <span class="title">推荐歌单</span>
    </router-link>
    <router-link class="menu-list-item" to="/latest">
      <el-icon :size="16">
        <Star />
      </el-icon>
      <span class="title">最新音乐</span>
    </router-link>
    <router-link class="menu-list-item" to="/about">
      <el-icon :size="16">
        <Apple />
      </el-icon>
      <span class="title">关于项目</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { Sunny, Moon, Star, Apple } from '@element-plus/icons-vue'
</script>

<style lang="less" scoped>
.menu-list {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  .menu-list-item {
    height: 42px;
    padding: 12px 15px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: var(--color-avtive-background);
    }
    &.router-link-active {
      color: var(--color-main);
      background-color: var(--color-avtive-background);
    }
    .title {
      padding: 3px 0 0 10px;
      font-size: 14px;
    }
  }
}
</style>
