/**
 * 用户信息
 */
export interface IUserInfo {
  name: string
  avatar: string
}

/**
 * 用户歌单信息
 */
export interface IUserPlaylistInfo {
  id: number
  name: string
}

/**
 * 用户创建歌单、收藏歌单
 */
export interface IUserPlaylistInfoAll {
  createPlaylist: IUserPlaylistInfo[]
  collectPlaylist: IUserPlaylistInfo[]
}
