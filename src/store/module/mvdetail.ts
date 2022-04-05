/**
 * MV详情页面 请求存储数据仓库
 */
import { defineStore } from 'pinia'
import { requestMvDetail, requestMvSimi, requestMvUrl } from '@/service/mv'
import { requestArtists } from '@/service/artist'
import type { IMvDetail, IMv } from '@/service/mv/types'
import type { IArtistInfo } from '@/service/artist/types'

const useMvDetailStore = defineStore('mvDetail', {
  state: () => {
    return {
      mvUrl: '' as string,
      mvDetail: {} as IMvDetail,
      mvRecommendList: [] as IMv[],
      artistInfo: {} as IArtistInfo
    }
  },
  actions: {
    getMvDetailData(id: number) {
      this.$reset()
      this.getMvDetailInfo(id)
      this.getMvRecommendList(id)
      this.getMvUrl(id)
    },
    async getMvDetailInfo(id: number) {
      const mvDetail = await requestMvDetail({ mvid: id })
      const artistInfo = await requestArtists({ id: mvDetail.artistId })
      this.$patch((state) => {
        state.mvDetail = mvDetail
        state.artistInfo = artistInfo
      })
    },
    async getMvRecommendList(id: number) {
      const mvRecommendList = await requestMvSimi({ mvid: id })
      this.$patch((state) => {
        state.mvRecommendList = mvRecommendList
      })
    },
    async getMvUrl(id: number) {
      const mvUrl = await requestMvUrl({ id: id })
      this.$patch((state) => {
        state.mvUrl = mvUrl
      })
    }
  }
})

export default useMvDetailStore
