<template>
  <!-- 歌单顶部详情 -->
  <PlaylistDetailHeader :playlistDetail="playlistDetail" />
  <!-- tabs 歌曲列表  评论列表 -->
  <el-tabs v-model="tabsActiveName" @tab-click="handleTabsClick()">
    <el-tab-pane label="歌曲列表" name="song">
      <SongList :song-list="songList" />
    </el-tab-pane>
    <el-tab-pane :label="`评论(${playlistDetail.commentCount})`" name="comment">
      <span>评论列表</span>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import PlaylistDetailHeader from './components/PlaylistDetailHeader.vue'
import SongList from '@/components/song-list/SongList.vue'

import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePlaylistDetailStore } from '@/store'

const route = useRoute()
const playlistDetailStore = usePlaylistDetailStore()
const { playlistDetail, songList } = storeToRefs(playlistDetailStore)
watchEffect(() => {
  if (route.params.id) {
    playlistDetailStore.getPlaylistDetailPageData({
      id: route.params.id as string
    })
  }
})

const tabsActiveName = ref('song')
const handleTabsClick = () => {
  console.log(1)
}
</script>

<style lang="less">
.el-tabs {
  .el-tabs__active-bar {
    background-color: var(--color-main) !important;
  }
  .el-tabs__item {
    color: var(--color-text);
    font-weight: 400;
    &.is-active {
      color: var(--color-main);
    }
  }
}
</style>
