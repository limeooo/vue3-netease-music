/**
 * 歌曲列表信息
 */
export interface ISong {
  id: number
  name: string
  order: number
  picUrl: string
  artists: string
  album: string
  duration: number
}

/**
 * 歌单信息
 */
export interface ISongAll {
  total: number
  more: boolean
  songs: ISong[]
}
