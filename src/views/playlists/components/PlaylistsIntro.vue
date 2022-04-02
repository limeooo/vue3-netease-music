<template>
  <div class="playlists-intro" @click="handlePlaylistClick()">
    <div class="intro-image">
      <img v-lazy="thumbnail(playlistInfo.picUrl, 250)" />
    </div>
    <div class="intro-info">
      <div class="tag">精品歌单</div>
      <div class="title">{{ playlistInfo.name }}</div>
      <div class="description">
        {{ playlistInfo.description }}
      </div>
    </div>
    <div
      class="intro-background-image"
      :style="`background-image: url(${playlistInfo.picUrl});`"
    ></div>
    <div class="intro-background-grey"></div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, computed } from 'vue'
import { useRouter } from 'vue-router'
import { thumbnail } from '@/utils'
import type { IPlaylistAll } from '@/service/playlist/types'

const props = withDefaults(
  defineProps<{
    topPlaylist: IPlaylistAll
  }>(),
  {}
)

const playlistInfo = computed<any>(() =>
  props.topPlaylist.playlists ? props.topPlaylist.playlists[0] : {}
)

const router = useRouter()
const handlePlaylistClick = () => {
  if (playlistInfo.value.id)
    router.push({ path: `/playlist/${playlistInfo.value.id}` })
}
</script>

<style lang="less" scoped>
.playlists-intro {
  .border-radius(100%,172px,5px);
  position: relative;
  padding: 16px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  .intro-image {
    .image-size(140px);
  }
  .intro-info {
    .display-flex(space-between,@flex-direction: column);
    padding-left: 8px;
    .tag {
      .display-flex(center,center);
      .border-radius(84px,28px,5px);
      color: @color--playlist-tag;
      border: 1px solid @color--playlist-tag;
      font-size: @font-size-sm-medium;
    }
    .title {
      color: #fff;
      font-size: @font-size-lg-medium;
    }
    .description {
      color: @color-description;
      font-size: @font-size-sm;
      height: 70px;
      line-height: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .intro-background-image,
  .intro-background-grey {
    .position(0, auto, auto, 0, absolute);
    width: 100%;
    height: 172px;
    z-index: -1;
    overflow: hidden;
  }
  .intro-background-image {
    filter: blur(16px);
  }
  .intro-background-grey {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
