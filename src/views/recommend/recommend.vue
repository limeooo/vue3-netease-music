<template>
  <div class="recommend">
    <!-- 精品歌单推荐信息 -->
    <RecommendIntro :topPlaylist="topPlaylist" />
    <!-- Tabs -->
    <Tabs :tabsConfig="tabsConfig" @handleTabClick="handleTabClick" />
  </div>
</template>

<script setup lang="ts">
import RecommendIntro from './components/RecommendIntro.vue'
import Tabs from '@/components/tabs/Tabs.vue'

import { storeToRefs } from 'pinia'
import { useRecommendStore } from '@/store'
import { tabsConfig } from './config/tabs-config'

const recommendStore = useRecommendStore()
recommendStore.getRecommendData()
const { topPlaylist } = storeToRefs(recommendStore)

const handleTabClick = (value: string) => {
  console.log(value)
}
</script>
