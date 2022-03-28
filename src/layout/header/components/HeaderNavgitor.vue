<template>
  <div class="header-navgitor">
    <SvgIcon name="arrow-back" @click="hendleRouterBack()" />
    <SvgIcon name="arrow-forward" @click="hendleRouterForward()" />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { useRouter } from 'vue-router'
import { usePlayerStore } from '@/store'

const router = useRouter()
const playerStore = usePlayerStore()
const hendleRouterBack = () => {
  playerStore.isOpenLyric ? (playerStore.isOpenLyric = false) : router.back()
}
const hendleRouterForward = () => {
  playerStore.isOpenLyric ? (playerStore.isOpenLyric = false) : router.forward()
}
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
