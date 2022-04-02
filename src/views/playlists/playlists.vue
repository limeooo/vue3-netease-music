<template>
  <div class="playlists">
    <!-- 精品歌单推荐信息 -->
    <PlaylistsIntro :topPlaylist="topPlaylist" />
    <!-- Tabs -->
    <Tabs :tabsConfig="tabsConfig" v-model="currentTab" />
    <!-- 歌单列表 -->
    <PlayList :playlist="playlist.playlists ?? []" />
    <!-- 分页器 -->
    <el-pagination
      v-model:currentPage="currentPage"
      layout="prev, pager, next"
      :total="playlist.total / 5"
      @current-change="getTopPlaylist()"
    />
  </div>
</template>

<script setup lang="ts">
import PlaylistsIntro from './components/PlaylistsIntro.vue'
import Tabs from '@/components/tabs/Tabs.vue'
import PlayList from '@/components/play-list/PlayList.vue'

import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { usePlaylistsStore } from '@/store'
import { tabsConfig } from './config'

const playlistsStore = usePlaylistsStore()
const { topPlaylist, playlist } = storeToRefs(playlistsStore)
playlistsStore.getPlaylistsData()

const currentPage = ref(1)
const currentTab = ref('全部')

const getTopPlaylist = () => {
  playlistsStore.getTopPlaylist({
    cat: currentTab.value,
    offset: (currentPage.value - 1) * 50
  })
}

watch(currentTab, () => {
  currentPage.value = 1
  getTopPlaylist()
})
</script>
