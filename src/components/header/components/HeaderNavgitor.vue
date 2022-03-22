<template>
  <div class="header-navgitor">
    <SvgIcon name="arrow-back" />
    <SvgIcon name="arrow-forward" />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'
</script>

<style lang="less" scoped>
.header-navgitor {
  width: 85px;
  padding-right: 25px;
  display: flex;
  justify-content: space-between;
  .icon {
    cursor: pointer;
  }
}
</style>
