<template>
  <div class="songs">
    <!-- Tabs页面 -->
    <Tabs :tabsConfig="tabsConfig" v-model="currentTab" />
    <!-- 歌曲列表 -->
    <SongList :song-list="topSongList" />
  </div>
</template>

<script setup lang="ts">
import Tabs from '@/components/tabs/Tabs.vue'
import SongList from '@/components/song-list/SongList.vue'

import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useSongsStore } from '@/store'
import { tabsConfig } from './config'

const songsStore = useSongsStore()
const { topSongList } = storeToRefs(songsStore)
songsStore.getSongsData()

const currentTab = ref(0)
const getTopSongList = () => {
  songsStore.getTopSongList({ type: currentTab.value })
}
watch(currentTab, () => {
  getTopSongList()
})
</script>
