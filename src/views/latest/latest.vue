<template>
  <div class="latest">
    <!-- Tabs页面 -->
    <Tabs :tabsConfig="tabsConfig" @handleTabClick="handleTabClick" />
    <!-- 歌曲列表 -->
    <SongList :song-list="topSongList" />
  </div>
</template>

<script setup lang="ts">
import Tabs from '@/components/tabs/Tabs.vue'
import SongList from '@/components/song-list/SongList.vue'

import { storeToRefs } from 'pinia'
import { useLatestStore } from '@/store'
import { tabsConfig } from './config/tabs-config'

const latestStore = useLatestStore()
const { topSongList } = storeToRefs(latestStore)
latestStore.getLatestData()

const handleTabClick = (value: number) => {
  latestStore.getTopSongList({ type: value })
}
</script>
