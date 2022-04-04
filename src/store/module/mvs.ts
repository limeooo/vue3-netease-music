/**
 * 最新MV页面 请求存储数据仓库
 */
import { defineStore } from 'pinia'
import { requestMvAll } from '@/service/mv'
import type { IMv, IRequestMv } from '@/service/mv/types'

const useMvsStore = defineStore('mvs', {
  state: () => {
    return {
      mvList: [] as IMv[],
      mvTotal: 0
    }
  },
  actions: {
    async getMvsData(params: IRequestMv) {
      const mvResult = await requestMvAll(params)
      this.$patch((state) => {
        state.mvList = mvResult.mvs
        if (mvResult.total) state.mvTotal = mvResult.total
      })
    }
  }
})

export default useMvsStore
