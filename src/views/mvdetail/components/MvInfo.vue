<template>
  <div class="mv-info">
    <div class="author-wrap">
      <img class="avatar" :src="thumbnail(artistInfo.picUrl, 120)" />
      <div class="author">
        <span class="name">{{ artistInfo.name }}</span>
        <span class="desc">{{ artistInfo.description }}</span>
      </div>
    </div>
    <div class="title">{{ mvDetail.name }}</div>
    <div class="info">
      <span>{{ `发布：${mvDetail.createTime}` }}</span>
      <span class="play-count">{{ `播放：${mvDetail.playCount}次` }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import { thumbnail } from '@/utils'
import type { IMvDetail } from '@/service/mv/types'
import type { IArtistInfo } from '@/service/artist/types'

withDefaults(
  defineProps<{
    mvDetail: IMvDetail
    artistInfo: IArtistInfo
  }>(),
  {}
)
</script>

<style lang="less" scoped>
.mv-info {
  margin: 20px 0 40px;
  .author-wrap {
    display: flex;
    .avatar {
      .border-radius(60px);
      height: 60px;
      width: 60px;
    }
    .author {
      .display-flex(space-around, flex-start, column);
      width: 100%;
      padding-left: 8px;
      .name {
        font-size: @font-size-sm-medium;
        color: var(--font-color);
      }
      .desc {
        .text-ellipsis-more(2);
        font-size: @font-size-sm-medium;
        color: var(--font-color-desc);
      }
    }
  }
  .title {
    margin: 20px 0;
    color: var(--font-color);
    font-size: @font-size-lg-title;
    font-weight: @font-weight-bold;
  }
  .info {
    font-size: @font-size-sm;
    color: var(--font-color-desc);
    .play-count {
      margin-left: 20px;
    }
  }
}
</style>
