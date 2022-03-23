import type { AxiosResponse } from 'axios'
import type { ISong } from './types'

/**
 * 转化新歌速递，标准化字段、数据平级、转换字段格式
 */
export const translateTopSong = (res: AxiosResponse): ISong[] => {
  const { data } = res.data

  return data.map((song: any, index: number) => {
    return {
      id: song.id,
      name: song.name,
      order: index + 1,
      picUrl: song.album.picUrl,
      artists: song.artists.map((ar: any) => ar.name).join('/'),
      album: song.album.name,
      duration: song.duration
    }
  })
}
