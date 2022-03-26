<template>
  <div class="header-search-tags"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header-search-tags {
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 63px;
  width: 350px;
  z-index: var(--z-index-search);
  background: var(--color-background);
  box-shadow: 0 5px 5px 0 rgb(0, 0, 0, 0.2);
}
</style>
