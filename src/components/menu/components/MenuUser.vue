<template>
  <div class="menu-user">
    <div class="user-avatar">
      <el-avatar :icon="StarFilled" />
    </div>
    <div class="user-name">
      <span>{{ userName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { StarFilled } from '@element-plus/icons-vue'

const userName = ref('登录')
</script>

<style lang="less" scoped>
.menu-user {
  height: 72px;
  padding: 16px;
  display: flex;
  align-items: center;
  .user-avatar {
    .el-avatar {
      background-color: var(--color-main);
    }
  }
  .user-name {
    font-size: 15px;
    padding-left: 10px;
  }
}
</style>
