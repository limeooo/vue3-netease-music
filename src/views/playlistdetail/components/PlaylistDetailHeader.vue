<template>
  <div class="playlist-detail-header">
    <div class="detail-image">
      <img v-lazy="thumbnail(playlistDetail.coverImgUrl, 360)" />
    </div>
    <div class="detail-info">
      <div class="top">
        <div class="title">{{ playlistDetail.name }}</div>
        <div class="user">
          <img v-lazy="thumbnail(playlistDetail.avatarUrl, 60)" />
          <span>
            {{ playlistDetail.nickname + ' 创建' }}
          </span>
        </div>
      </div>
      <div class="bottom">
        <div class="tags">{{ '标签：' + playlistDetail.tags }}</div>
        <div class="introduction">
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
  .detail-image {
    .image-size(200px);
  }
  .detail-info {
    .display-flex(space-between,@flex-direction: column);
    width: calc(100% - 200px);
    padding-left: 24px;
    .top {
      .title {
        color: var(--font-color-title);
        font-size: @font-size-lg-medium;
        padding-bottom: 12px;
      }
      .user {
        .display-flex(@align-items: center);
        color: var(--font-color);
        font-size: @font-size-sm;
        img {
          .border-radius(30px);
        }
        span {
          padding-left: 10px;
        }
      }
    }
    .bottom {
      .tags,
      .introduction {
        .text-ellipsis();
        color: var(--font-color);
        font-size: @font-size-sm;
        padding-top: 8px;
      }
    }
  }
}
</style>
