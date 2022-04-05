<template>
  <div class="mv-detail" v-if="mvDetail.id">
    <div class="detail-left">
      <MvPlayer :mv-url="mvUrl" :mv-pic-url="mvDetail.picUrl" />
      <CommentList :id="mvDetail.id" :type="CommentType.mv" />
    </div>
    <div class="detail-right"></div>
  </div>
</template>

<script setup lang="ts">
import MvPlayer from './components/MvPlayer.vue'
import CommentList from '@/components/comment-list/CommentList.vue'

import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMvDetailStore } from '@/store'
import { CommentType } from '@/service/comment/types'

const route = useRoute()
const mvDetailStore = useMvDetailStore()
const { mvUrl, mvDetail } = storeToRefs(mvDetailStore)
watchEffect(() => {
  if (route.params.id) {
    mvDetailStore.getMvDetailData(Number(route.params.id as string))
  }
})
</script>

<style lang="less" scoped>
.mv-detail {
  display: flex;
  width: 950px;
  margin: 20px auto;
  .detail-left {
    width: 610px;
  }
  .detail-right {
    flex: 1;
  }
}
</style>
