<template>
  <div class="discovery">
    <!-- 轮播图 -->
    <Banner :bannerList="bannerList" />
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/banner/Banner.vue'

import { storeToRefs } from 'pinia'
import { useDiscoveryStore, useSearchStore } from '@/store'

const discoveryStore = useDiscoveryStore()
const searchStore = useSearchStore()
const { bannerList } = storeToRefs(discoveryStore)
discoveryStore.getDiscoveryData()
searchStore.getSearchHot()
</script>
