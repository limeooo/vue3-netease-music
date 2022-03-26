<template>
  <!-- 评论列表组件封装 -->
  <div class="comment-list">
    <template v-if="hotCommentList?.length > 0 && currentPage === 1">
      <p class="title">最热评论</p>
      <template v-for="item in hotCommentList" :key="item.id">
        <CommentListItem :comment="item" />
      </template>
    </template>
    <template v-if="newCommentList?.length > 0">
      <p class="title new-comment-title">最新评论</p>
      <template v-for="item in newCommentList" :key="item.id">
        <CommentListItem :comment="item" />
      </template>
      <el-pagination
        v-if="total / 30 > 1"
        v-model:currentPage="currentPage"
        layout="prev, pager, next"
        :total="total / 3"
        @current-change="handleChangePage()"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import CommentListItem from './CommentListItem.vue'

import { ref, watch, withDefaults } from 'vue'
import { requestHotComment, requestNewComment } from '@/service/comment'
import { CommentType } from '@/service/comment/types'
import type { IComment } from '@/service/comment/types'

const props = withDefaults(
  defineProps<{
    id: string | number
    type: CommentType
  }>(),
  {}
)

const currentPage = ref(1)
const cursor = ref('')
const total = ref(0)
const hotCommentList = ref<IComment[]>([])
const newCommentList = ref<IComment[]>([])

const getHotComment = () => {
  requestHotComment({
    id: props.id,
    type: props.type,
    limit: 10
  }).then((commentData) => {
    hotCommentList.value = commentData.comments
  })
}

const handleChangePage = () => {
  requestNewComment({
    id: props.id,
    type: props.type,
    pageNo: currentPage.value,
    pageSize: 30,
    sortType: 3,
    cursor: cursor.value
  }).then((commentData) => {
    newCommentList.value = commentData.comments
    cursor.value = commentData.cursor
    total.value = commentData.total
  })
}

watch(
  () => props.id,
  () => {
    getHotComment()
    handleChangePage()
  },
  {
    immediate: true
  }
)
</script>

<style lang="less" scoped>
.comment-list {
  .title {
    color: var(--color-text);
    font-weight: 700;
    font-size: 16px;
    margin: 20px 0 4px;
  }
}
</style>
