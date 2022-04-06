<template>
  <div class="discovery">
    <!-- 轮播图 -->
    <Banner :bannerList="bannerList" />
    <!-- 推荐歌单 -->
    <p class="title">推荐歌单</p>
    <PlayList :playlist="playlistList" />
    <!-- 推荐MV -->
    <p class="title">推荐MV</p>
    <MvList :mvList="mvList" />
    <!-- 最新音乐 -->
    <p class="title">最新音乐</p>
    <SongList :songList="songList" />
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/banner/Banner.vue'
import SongList from '@/components/song-list/SongList.vue'
import PlayList from '@/components/play-list/PlayList.vue'
import MvList from '@/components/mv-list/MvList.vue'

import { storeToRefs } from 'pinia'
import { useDiscoveryStore } from '@/store'

const discoveryStore = useDiscoveryStore()
const { bannerList, songList, playlistList, mvList } =
  storeToRefs(discoveryStore)
discoveryStore.getDiscoveryData()
</script>

<style lang="less" scoped>
.discovery {
  .title {
    color: var(--font-color);
    font-size: @font-size-lg;
    font-weight: @font-weight-bold;
    padding: 10px 0;
  }
}
</style>
