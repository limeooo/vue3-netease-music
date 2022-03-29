<template>
  <div class="recommend-intro" @click="handlePlaylistClick()">
    <div class="intro-image">
      <img v-lazy="thumbnail(playlistInfo.picUrl, 140)" />
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
.recommend-intro {
  position: relative;
  width: 100%;
  height: 172px;
  padding: 16px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  .intro-image {
    img {
      width: 140px;
      height: 140px;
    }
  }
  .intro-info {
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .tag {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 84px;
      height: 28px;
      border-radius: 5px;
      font-size: 13px;
      color: var(--color-playlist-tag);
      border: 1px solid var(--color-playlist-tag);
    }
    .title {
      font-size: 16px;
      color: var(--color-text-white);
    }
    .description {
      height: 70px;
      color: var(--color-text-description);
      font-size: 13px;
      line-height: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .intro-background-image,
  .intro-background-grey {
    position: absolute;
    top: 0;
    left: 0;
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
