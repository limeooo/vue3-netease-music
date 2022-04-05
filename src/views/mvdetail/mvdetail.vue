<template>
  <div class="mv-detail" v-if="mvDetail.id">
    <div class="detail-left">
      <MvPlayer :mv-url="mvUrl" :mv-pic-url="mvDetail.picUrl" />
      <MvInfo :mv-detail="mvDetail" :artist-info="artistInfo" />
      <CommentList :id="mvDetail.id" :type="CommentType.mv" />
    </div>
    <div class="detail-right">
      <p class="title">相关推荐</p>
      <MvList :mv-list="mvRecommendList" related />
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 由于为了使用keep-alive中的exclude属性需要定义name、所以未使用setup暴露
 */
import MvPlayer from './components/MvPlayer.vue'
import MvInfo from './components/MvInfo.vue'
import CommentList from '@/components/comment-list/CommentList.vue'
import MvList from '@/components/mv-list/MvList.vue'

import { defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMvDetailStore } from '@/store'
import { CommentType } from '@/service/comment/types'

export default defineComponent({
  name: 'MvDetail',
  components: { MvPlayer, CommentList, MvList, MvInfo },
  setup() {
    const mvDetailStore = useMvDetailStore()
    const { mvUrl, mvDetail, mvRecommendList, artistInfo } =
      storeToRefs(mvDetailStore)

    const route = useRoute()
    mvDetailStore.getMvDetailData(Number(route.params.id as string))

    watch(
      () => route.params.id,
      (id) => {
        if (id) mvDetailStore.getMvDetailData(Number(route.params.id as string))
      }
    )

    return {
      MvPlayer,
      CommentList,

      CommentType,
      mvUrl,
      mvDetail,
      mvRecommendList,
      artistInfo
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
    width: 340px;
    padding-left: 30px;
    .title {
      color: var(--font-color-title);
      font-size: @font-size-sm-medium;
      font-weight: @font-weight-bold;
    }
  }
}
</style>
