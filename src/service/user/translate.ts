import type { AxiosResponse } from 'axios'
import { IUserInfo, IUserPlaylistInfo, IUserPlaylistInfoAll } from './types'

/**
 * 转化用户信息，标准化字段、转换字段格式
 */
export const translateUserInfo = (res: AxiosResponse): IUserInfo => {
  const profile = res.data.profile ?? {}

  return {
    name: profile.nickname,
    avatar: profile.avatarUrl
  }
}

/**
 * 转化用户歌单信息，标准化字段、转换字段格式
 */
export const translateUserPlaylistInfo = (
  res: AxiosResponse,
  uid: number
): IUserPlaylistInfoAll => {
  const playlist = res.data.playlist ?? []

  const createPlaylist: IUserPlaylistInfo[] = []
  const collectPlaylist: IUserPlaylistInfo[] = []
  playlist.forEach((item: any) => {
    if (item.specialType === 5) return
    item.userId === uid
      ? createPlaylist.push({ id: item.id, name: item.name })
      : collectPlaylist.push({ id: item.id, name: item.name })
  })
  return {
    createPlaylist,
    collectPlaylist
  }
}
