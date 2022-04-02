import type { AxiosResponse } from 'axios'
import type { IMvAll } from './types'

/**
 * 转化最新 Mv，标准化字段、数据平级、转换字段格式
 */
export const translateMv = (res: AxiosResponse): IMvAll => {
  const data = res.data
  const mvList = data.data ?? []

  const mvs = mvList.map((mv: any) => {
    return {
      id: mv.id,
      name: mv.name,
      playCount: mv.playCount,
      duration: mv.duration,
      picUrl: mv.cover,
      artistId: mv.artistId,
      artistName: mv.artistName
    }
  })
  return {
    mvs,
    total: data.count,
    more: data.hasMore
  }
}
