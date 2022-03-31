<template>
  <div class="header-button">
    <el-tooltip effect="light" content="你" placement="bottom">
      <span class="mac-icon mac-icon--red" @click="$router.push('/discovery')">
        <SvgIcon name="header-home" size="13" />
      </span>
    </el-tooltip>
    <el-tooltip effect="light" content="好" placement="bottom">
      <span class="mac-icon mac-icon--yellow" @click="exit">
        <SvgIcon name="header-fullscreen-cancel" size="13" />
      </span>
    </el-tooltip>
    <el-tooltip effect="light" content="啊" placement="bottom">
      <span class="mac-icon mac-icon--green" @click="toggle">
        <SvgIcon name="header-fullscreen" size="13" />
      </span>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'
import { useFullscreen } from '@vueuse/core'

const { toggle, exit } = useFullscreen()
</script>

<style lang="less" scoped>
.header-button {
  .display-flex(space-between,center);
  width: 79px;
  padding: 0 10px;
  .mac-icon {
    display: inline-block;
    .border-radius(13px);
    cursor: pointer;
    &.mac-icon--red {
      background-color: @color-mac-button-red;
    }
    &.mac-icon--yellow {
      background-color: @color-mac-button-yellow;
    }
    &.mac-icon--green {
      background-color: @color-mac-button-green;
    }
    .icon {
      .display-flex(center,center);
      opacity: 0;
      transition: all 0.3s;
    }
    &:hover {
      .icon {
        opacity: 1;
      }
    }
  }
}
</style>
