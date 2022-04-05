<template>
  <div class="mv-detail" v-if="mvDetail.id">
    <div class="detail-left">
      <MvPlayer :mv-url="mvUrl" :mv-pic-url="mvDetail.picUrl" />
      <CommentList :id="mvDetail.id" :type="CommentType.mv" />
    </div>
    <div class="detail-right"></div>
  </div>
</template>

<script lang="ts">
/**
 * 由于为了使用keep-alive中的exclude属性需要定义name、所以未使用setup暴露
 */
import MvPlayer from './components/MvPlayer.vue'
import CommentList from '@/components/comment-list/CommentList.vue'

import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMvDetailStore } from '@/store'
import { CommentType } from '@/service/comment/types'

export default defineComponent({
  name: 'MvDetail',
  components: { MvPlayer, CommentList },
  setup() {
    const mvDetailStore = useMvDetailStore()
    const { mvUrl, mvDetail } = storeToRefs(mvDetailStore)

    const route = useRoute()
    mvDetailStore.getMvDetailData(Number(route.params.id as string))

    return {
      MvPlayer,
      CommentList,
      CommentType,
      mvUrl,
      mvDetail
    }
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
