<template>
  <div class="discovery">
    <!-- 轮播图 -->
    <Banner :bannerList="bannerList" />
    <!-- 推荐歌单 -->
    <p class="title">推荐歌单</p>
    <PlayList :playlist="playlistList" />
    <!-- 最新音乐 -->
    <p class="title">最新音乐</p>
    <SongList :songList="songList" />
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/banner/Banner.vue'
import SongList from '@/components/song-list/SongList.vue'
import PlayList from '@/components/play-list/PlayList.vue'

import { storeToRefs } from 'pinia'
import { useDiscoveryStore } from '@/store'

const discoveryStore = useDiscoveryStore()
const { bannerList, songList, playlistList } = storeToRefs(discoveryStore)
discoveryStore.getDiscoveryData()
</script>

<style lang="less" scoped>
.discovery {
  .title {
    padding: 10px 0;
    font-size: 18px;
    color: var(--color-text);
    font-weight: bold;
  }
}
</style>
