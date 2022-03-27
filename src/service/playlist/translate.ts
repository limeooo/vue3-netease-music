import type { AxiosResponse } from 'axios'
import type { IPlaylist, IPlaylistAll, IPlaylistDetail } from './types'

/**
 * 转化网友精选碟歌单，标准化字段、数据平级、转换字段格式
 */
export const translateTopPlaylist = (res: AxiosResponse): IPlaylistAll => {
  const { total, more } = res.data
  const playlists = res.data.playlists ?? []

  const transPlaylists: IPlaylist[] = playlists.map(
    (playlist: any, index: number) => {
      return {
        id: playlist.id,
        name: playlist.name,
        order: index + 1,
        picUrl: playlist.coverImgUrl,
        playCount: playlist.playCount,
        description: playlist.description
      }
    }
  )

  return {
    total: total as number,
    more: more as boolean,
    playlists: transPlaylists
  }
}

/**
 * 转化推荐歌单，标准化字段、转换字段格式
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
 * 转化歌单详情，处理歌单详情不能获取详情，再次调用歌曲查询
 */
export const translatePlaylistDetail = (
  res: AxiosResponse
): IPlaylistDetail => {
  const { playlist } = res.data
  const { tags, creator } = playlist
  const trackIds = playlist.trackIds ?? []
  const ids = trackIds.map((track: any) => track.id).join(',')

  return {
    id: playlist.id,
    name: playlist.name,
    createTime: playlist.createTime,
    coverImgUrl: playlist.coverImgUrl,
    description: playlist.description,
    avatarUrl: creator.avatarUrl,
    nickname: creator.nickname,
    commentCount: playlist.commentCount,
    tags: tags.join('/'),
    songIds: ids
  }
}
