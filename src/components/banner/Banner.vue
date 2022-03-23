<template>
  <div class="banner">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in bannerList" :key="item.encodeId">
        <el-image :src="item.imageUrl"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDiscoveryStore } from '@/store'

const discoveryStore = useDiscoveryStore()
discoveryStore.getBannerList()
const { bannerList } = storeToRefs(discoveryStore)
</script>

<style scoped></style>
