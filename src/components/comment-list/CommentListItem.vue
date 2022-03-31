<template>
  <div class="comment-list-item">
    <img :src="thumbnail(comment.avatarUrl, 40)" />
    <div class="comment-info">
      <div class="top">
        <span class="nickname">{{ comment.nickname + '：' }}</span>
        <span class="content">{{ comment.content }}</span>
      </div>
      <div class="bottom">
        <div class="time">
          {{ formatTime(comment.time, 'YYYY-MM-DD HH:mm') }}
        </div>
        <div class="great">
          <SvgIcon name="great" size="16" />
          <span class="count">{{ comment.likedCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/base/SvgIcon.vue'

import { withDefaults } from 'vue'
import { thumbnail, formatTime } from '@/utils'
import type { IComment } from '@/service/comment/types'

withDefaults(
  defineProps<{
    comment: IComment
  }>(),
  {}
)
</script>

<style lang="less" scoped>
.comment-list-item {
  display: flex;
  padding-top: 20px;
  img {
    .border-radius(40px);
    margin-right: 12px;
  }
  .comment-info {
    .display-flex(space-between,@flex-direction: column);
    font-size: @font-size-sm;
    width: 100%;
    min-height: 60px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-border);
    .top {
      .nickname {
        color: @color-nickname;
      }
      .content {
        color: var(--font-color);
      }
    }
    .bottom {
      .display-flex(space-between,flex-end,center);
      color: var(--font-color-title-morelight);
      width: 100%;
      .count {
        padding-left: 5px;
      }
    }
  }
}
</style>
