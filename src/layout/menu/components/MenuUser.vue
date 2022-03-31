<template>
  <div class="menu-user">
    <SvgIcon name="menu-icon" size="30" />
    <div class="user-name">
      <span>{{ userName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { ref } from 'vue'

const userName = ref('你好啊 李银河')
</script>

<style lang="less" scoped>
.menu-user {
  .display-flex(@align-items: center);
  height: 72px;
  padding: 16px;
  .user-avatar {
    .el-avatar {
      background-color: @color-main;
    }
  }
  .user-name {
    font-size: @font-size;
    padding-left: 10px;
  }
}
</style>
