import type { AxiosResponse } from 'axios'
import type { IArtistInfo } from './types'

/**
 * 转化作者信息，标准化字段、数据平级、转换字段格式
 */
export const translateArtistInfo = (res: AxiosResponse): IArtistInfo => {
  const artist = res.data.artist ?? {}

  return {
    id: artist.id,
    name: artist.name,
    picUrl: artist.picUrl,
    description: artist.briefDesc
  }
}
