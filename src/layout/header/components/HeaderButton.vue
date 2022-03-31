<template>
  <div class="header-button">
    <el-tooltip effect="light" content="你" placement="bottom">
      <span class="mac-icon mac-icon--red"></span>
    </el-tooltip>
    <el-tooltip effect="light" content="好" placement="bottom">
      <span class="mac-icon mac-icon--yellow"></span>
    </el-tooltip>
    <el-tooltip effect="light" content="啊" placement="bottom">
      <span class="mac-icon mac-icon--green"></span>
    </el-tooltip>
  </div>
</template>

<style lang="less" scoped>
.header-button {
  .display-flex(space-between,center);
  width: 79px;
  padding: 0 10px;
  .mac-icon {
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
  }
}
</style>
