<template>
  <div class="mv-detail"></div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMvDetailStore } from '@/store'

const route = useRoute()
const mvDetailStore = useMvDetailStore()
const { mvUrl, mvDetail, mvRecommendList, artistInfo } =
  storeToRefs(mvDetailStore)
watchEffect(() => {
  if (route.params.id) {
    mvDetailStore.getMvDetailData(Number(route.params.id as string))
  }
})
</script>

<style scoped></style>
