<template>
  <div class="playlist-detail-header">
    <img v-lazy="thumbnail(playlistDetail.coverImgUrl, 200)" />
    <div class="detail-info">
      <div class="top">
        <div class="title">{{ playlistDetail.name }}</div>
        <div class="user">
          <img v-lazy="thumbnail(playlistDetail.avatarUrl, 30)" />
          <span>
            {{ playlistDetail.nickname + ' 创建' }}
          </span>
        </div>
      </div>
      <div class="bottom">
        <div class="tags">{{ '标签：' + playlistDetail.tags }}</div>
        <div class="introduction text-ellipsis">
          {{ '简介：' + playlistDetail.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import { thumbnail } from '@/utils'
import type { IPlaylistDetail } from '@/service/playlist/types'

withDefaults(
  defineProps<{
    playlistDetail: IPlaylistDetail
  }>(),
  {}
)
</script>

<style lang="less" scoped>
.playlist-detail-header {
  height: 236px;
  padding-bottom: 36px;
  display: flex;
  img {
    width: 200px;
    height: 200px;
  }
  .detail-info {
    width: calc(100% - 200px);
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      .title {
        color: var(--color-text-title);
        font-size: 15px;
        padding-bottom: 12px;
      }
      .user {
        color: var(--color-text);
        font-size: 12px;
        display: flex;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        span {
          padding-left: 10px;
        }
      }
    }
    .bottom {
      .tags,
      .introduction {
        padding-top: 8px;
        color: var(--color-text);
        font-size: 12px;
      }
    }
  }
}
</style>
