<template>
  <!-- 歌单顶部详情 -->
  <PlaylistDetailHeader
    :playlistDetail="playlistDetail"
    v-if="playlistDetail.id"
  />
  <!-- tabs 歌曲列表  评论列表 -->
  <el-tabs v-model="tabsActiveName" v-if="playlistDetail.id">
    <el-tab-pane label="歌曲列表" name="song" lazy>
      <SongList :song-list="songList" />
    </el-tab-pane>
    <el-tab-pane
      :label="`评论(${playlistDetail.commentCount})`"
      name="comment"
      lazy
    >
      <CommentList :id="playlistDetail.id" :type="CommentType.playlist" />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
/**
 * 由于为了使用keep-alive中的exclude属性需要定义name、所以未使用setup暴露
 */
import PlaylistDetailHeader from './components/PlaylistDetailHeader.vue'
import SongList from '@/components/song-list/SongList.vue'
import CommentList from '@/components/comment-list/CommentList.vue'

import { ref, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePlaylistDetailStore } from '@/store'
import { CommentType } from '@/service/comment/types'

export default defineComponent({
  name: 'PlaylistDetail',
  components: { PlaylistDetailHeader, SongList, CommentList },
  setup() {
    const tabsActiveName = ref('song')

    const playlistDetailStore = usePlaylistDetailStore()
    const { playlistDetail, songList } = storeToRefs(playlistDetailStore)

    const route = useRoute()
    playlistDetailStore.getPlaylistDetailPageData({
      id: route.params.id as string
    })

    return {
      PlaylistDetailHeader,
      SongList,
      CommentList,

      tabsActiveName,
      playlistDetail,
      songList,
      CommentType
    }
  }
})
</script>
