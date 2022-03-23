<template>
  <div class="discovery">
    <Banner />
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/banner/Banner.vue'
import { useDiscoveryStore } from '@/store'

const discoveryStore = useDiscoveryStore()
discoveryStore.getDiscoveryData()
</script>
