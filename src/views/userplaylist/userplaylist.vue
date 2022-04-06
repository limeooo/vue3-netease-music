<template>
  <!-- 用户歌单页面 -->
  <SongList :song-list="songList" />
</template>

<script lang="ts">
/**
 * 由于为了使用keep-alive中的exclude属性需要定义name、所以未使用setup暴露
 */
import SongList from '@/components/song-list/SongList.vue'

import { ref, defineComponent, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { requestSongDetail } from '@/service/song'
import { requestPlaylistDetail } from '@/service/playlist'
import { ISong } from '@/service/song/types'

export default defineComponent({
  name: 'UserPlaylist',
  components: { SongList },
  setup() {
    const route = useRoute()
    const songList = ref<ISong[]>([])

    watchEffect(async () => {
      if (route.params.userplaylistid) {
        const playlistDetail = await requestPlaylistDetail({
          id: route.params.userplaylistid as string
        })
        const _songList = await requestSongDetail({
          ids: playlistDetail.songIds
        })
        songList.value = _songList
      }
    })

    return {
      SongList,

      songList
    }
  }
})
</script>
