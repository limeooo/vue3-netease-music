import type { AxiosResponse } from 'axios'
import type { IMv, IMvAll, IMvDetail } from './types'

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

/**
 * 转化Mv详情，标准化字段、数据平级、转换字段格式
 */
export const translateMvDetail = (res: AxiosResponse): IMvDetail => {
  const data = res.data.data ?? {}

  return {
    id: data.id,
    artistId: data.artistId,
    playCount: data.playCount,
    name: data.name,
    picUrl: data.cover,
    createTime: data.publishTime
  }
}

/**
 * 转化Mv相关推荐列表，标准化字段、数据平级、转换字段格式
 */
export const translateMvSimi = (res: AxiosResponse): IMv[] => {
  const mvs = res.data.mvs ?? []

  return mvs.map((mv: any) => {
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
}
