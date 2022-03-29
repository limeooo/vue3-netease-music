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
  padding-top: 20px;
  display: flex;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
  }
  .comment-info {
    width: 100%;
    min-height: 60px;
    // box-sizing: content-box;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    .top {
      .nickname {
        color: var(--color-text-nickname);
      }
      .content {
        color: var(--color-text);
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      color: var(--color-text-light);
      .count {
        padding-left: 5px;
      }
    }
  }
}
</style>
