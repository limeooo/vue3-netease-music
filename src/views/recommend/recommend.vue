<template>
  <div class="recommend">
    <!-- 精品歌单推荐信息 -->
    <RecommendIntro :topPlaylist="topPlaylist" />
    <!-- Tabs -->
    <Tabs :tabsConfig="tabsConfig" @handleTabClick="handleTabClick" />
    <!-- 歌单列表 -->
    <PlayList :playlist="playlist.playlists ?? []" />
    <!-- 分页器 -->
    <el-pagination
      v-model:currentPage="currentPage"
      layout="prev, pager, next"
      :total="playlist.total / 5"
      @current-change="handleTabClick(currentPage)"
    />
  </div>
</template>

<script setup lang="ts">
import RecommendIntro from './components/RecommendIntro.vue'
import Tabs from '@/components/tabs/Tabs.vue'
import PlayList from '@/components/play-list/PlayList.vue'

import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRecommendStore } from '@/store'
import { tabsConfig } from './config/tabs-config'

const recommendStore = useRecommendStore()
recommendStore.getRecommendData()
const { topPlaylist, playlist } = storeToRefs(recommendStore)

const currentPage = ref(1)
const currentCat = ref('全部')
const handleTabClick = (value: string | number) => {
  if (typeof value === 'string') {
    currentCat.value = value
    currentPage.value = 1
  }
  recommendStore.getTopPlaylist({
    cat: currentCat.value,
    offset: (currentPage.value - 1) * 50
  })
}
</script>
