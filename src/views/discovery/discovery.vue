<template>
  <div class="discovery">
    <Banner :bannerList="bannerList" />
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/banner/Banner.vue'

import { storeToRefs } from 'pinia'
import { useDiscoveryStore } from '@/store'

const discoveryStore = useDiscoveryStore()
const { bannerList } = storeToRefs(discoveryStore)
discoveryStore.getDiscoveryData()
</script>
