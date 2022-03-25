import type { ISong } from '@/service/song/types'

/**
 * 歌单列表信息
 */
export interface IPlaylist {
  id: number
  name: string
  order: number
  picUrl: string
  playCount: number
  copywriter?: string
  description?: string
}
/**
 * 歌单信息
 */
export interface IPlaylistAll {
  total: number
  more: boolean
  playlists: IPlaylist[]
}
/**
 * 歌单详情
 */
export interface IPlaylistDetail {
  id: number
  name: string
  createTime: number
  coverImgUrl: string
  description: string
  avatarUrl: string
  nickname: string
  commentCount: number
  tags: string
  songs: ISong[]
}
