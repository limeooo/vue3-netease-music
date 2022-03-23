<template>
  <div class="player">
    <div class="player-progress">
      <el-slider :show-tooltip="false" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.player {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background-color: var(--color-background);
  .player-progress {
    position: absolute;
    width: 100%;
    top: -13px;
  }
}
</style>
