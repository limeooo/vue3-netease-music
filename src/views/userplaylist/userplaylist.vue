<template>
  <!-- 用户歌单页面 -->
  <SongList :song-list="songList" />
</template>

<script setup lang="ts">
import SongList from '@/components/song-list/SongList.vue'

import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { requestSongDetail } from '@/service/song'
import { requestPlaylistDetail } from '@/service/playlist'
import { ISong } from '@/service/song/types'

const route = useRoute()
const songList = ref<ISong[]>([])
watchEffect(async () => {
  if (route.params.id) {
    const playlistDetail = await requestPlaylistDetail({
      id: route.params.id as string
    })
    const _songList = await requestSongDetail({ ids: playlistDetail.songIds })
    songList.value = _songList
  }
})
</script>
