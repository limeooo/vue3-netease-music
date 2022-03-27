import type { AxiosResponse } from 'axios'
import type { ISong } from './types'

/**
 * 转换最新歌曲列表，标准化字段、数据平级、转换字段格式
 */
export const translateTopSong = (res: AxiosResponse): ISong[] => {
  const data = res.data.data ?? []

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

/**
 * 转换根据ids搜索歌曲列表，标准化字段、数据平级、转换字段格式
 */
export const translateSong = (res: AxiosResponse): ISong[] => {
  const songs = res.data.songs ?? []

  return songs.map((song: any, index: number) => {
    return {
      id: song.id,
      name: song.name,
      order: index + 1,
      picUrl: song.al.picUrl,
      artists: song.ar.map((ar: any) => ar.name).join('/'),
      album: song.al.name,
      duration: song.dt
    }
  })
}
