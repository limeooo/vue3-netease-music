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
  // 此属性的true和false无意义、设置此值用以深度监听当前播放音乐的变化、来重置播放进度和是否播放
  isRestart?: boolean
}

/**
 * 歌单信息
 */
export interface ISongAll {
  total: number
  more: boolean
  songs: ISong[]
}
