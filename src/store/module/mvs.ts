/**
 * 最新MV页面 请求存储数据仓库
 */
import { defineStore } from 'pinia'
import { requestUserPlaylistInfo } from '@/service/mv'
import type { IMvAll, IRequestMv } from '@/service/mv/types'

const useMvsStore = defineStore('mvs', {
  state: () => {
    return {
      mvObj: {} as IMvAll
    }
  },
  actions: {
    async getMvsData(params: IRequestMv) {
      const mvResult = await requestUserPlaylistInfo(params)
      this.$patch((state) => {
        state.mvObj.mvs = mvResult.mvs
        state.mvObj.more = mvResult.more
        if (mvResult.total) state.mvObj.total = mvResult.total
      })
    }
  }
})

export default useMvsStore
