<template>
  <div class="header-button">
    <span class="mac-icon mac-icon--red"></span>
    <span class="mac-icon mac-icon--yellow"></span>
    <span class="mac-icon mac-icon--green"></span>
  </div>
</template>

<style lang="less" scoped>
.header-button {
  width: 79px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .mac-icon {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    cursor: pointer;
    &.mac-icon--red {
      background-color: #e65b51;
    }
    &.mac-icon--yellow {
      background-color: #e9c522;
    }
    &.mac-icon--green {
      background-color: #44d02a;
    }
  }
}
</style>
