import { AxiosResponse } from 'axios'
import type { ISong, ISongAll } from '@/service/song/types'
import type { IPlaylist, IPlaylistAll } from '@/service/playlist/types'

/**
 * 转化最近热门搜索，标准化字段、数据平级、转换字段格式
 */
export const translateSearchHot = (res: AxiosResponse): string[] => {
  const hots = res.data.result.hots ?? []
  return hots.map((hot: any) => hot.first)
}

/**
 * 转化歌曲搜索，标准化字段、数据平级、转换字段格式
 */
export const translateSearchSong = (res: AxiosResponse): ISongAll => {
  const { result } = res.data
  const songs = result.songs ?? []

  const transSongLists: ISong[] = songs.map((song: any, index: number) => {
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
  return {
    songs: transSongLists,
    more: songs.length < 30,
    total: result.songCount
  }
}

/**
 * 转化歌单搜索，标准化字段、数据平级、转换字段格式
 */
export const translateSearchPlaylist = (res: AxiosResponse): IPlaylistAll => {
  const { result } = res.data
  const playlists = result.playlists ?? []

  const transPlaylists: IPlaylist[] = playlists.map(
    (playlist: any, index: number) => {
      return {
        id: playlist.id,
        name: playlist.name,
        order: index + 1,
        picUrl: playlist.coverImgUrl,
        playCount: playlist.playCount
      }
    }
  )

  return {
    playlists: transPlaylists,
    more: playlists.length < 30,
    total: result.playlistCount
  }
}
