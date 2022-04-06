import type { AxiosResponse } from 'axios'
import type { IBanner } from './types'
import type { ISong } from '@/service/song/types'
import type { IPlaylist } from '@/service/playlist/types'
import type { IMv } from '@/service/mv/types'

/**
 * 转化发现音乐-轮播图、转换字段格式
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

/**
 * 转化发现音乐-最新音乐、转换字段格式
 */
export const translatePersonalizedSong = (res: AxiosResponse): ISong[] => {
  const result = res.data.result ?? []

  return result.map((song: any, index: number) => {
    return {
      id: song.id,
      name: song.name,
      order: index + 1,
      picUrl: song.picUrl,
      artists: song.song.artists.map((ar: any) => ar.name).join('/'),
      album: song.song.album.name,
      duration: song.song.duration
    }
  })
}

/**
 * 转化发现音乐-推荐歌单、转换字段格式
 */
export const translatePersonalizedPlaylist = (
  res: AxiosResponse
): IPlaylist[] => {
  const result = res.data.result ?? []

  return result.map((playlist: any, index: number) => {
    return {
      id: playlist.id,
      name: playlist.name,
      order: index + 1,
      picUrl: playlist.picUrl,
      playCount: playlist.playCount,
      copywriter: playlist.copywriter
    }
  })
}

/**
 * 转化发现音乐-推荐Mv、转换字段格式
 */
export const translatePersonalizedMv = (res: AxiosResponse): IMv[] => {
  const result = res.data.result ?? []

  return result.map((mv: any) => {
    return {
      id: mv.id,
      name: mv.name,
      playCount: mv.playCount,
      duration: mv.duration,
      picUrl: mv.picUrl,
      artistId: mv.artistId,
      artistName: mv.artistName
    }
  })
}
