import type { AxiosResponse } from 'axios'
import type { IBanner } from './types'

/**
 * 转化发现音乐、轮播图、转换字段格式
 */
export const translateBanner = (res: AxiosResponse): IBanner[] => {
  const banners = res.data.banners ?? []

  return banners.map((banner: any) => {
    return {
      imageUrl: banner.imageUrl,
      encodeId: banner.encodeId
    }
  })
}
