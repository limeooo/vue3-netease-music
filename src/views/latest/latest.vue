<template>
  <div class="latest">
    <LatestTabs />
    <SongList :song-list="topSongList" />
  </div>
</template>

<script setup lang="ts">
import LatestTabs from './components/LatestTabs.vue'
import SongList from '@/components/song-list/SongList.vue'

import { storeToRefs } from 'pinia'
import { useLatestStore } from '@/store'

const latestStore = useLatestStore()
const { topSongList } = storeToRefs(latestStore)
latestStore.getLatestData()
</script>
