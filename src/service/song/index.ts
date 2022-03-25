import requset from '../index'
import { translateTopSong } from './translate'
import type { ISong } from './types'

enum REQUEST_URL {
  SongList = '/top/song',
  Lyric = '/lyric'
}

// 最新音乐
function requestTopSongList(params: { type: number }) {
  return requset.get<ISong[]>({
    url: REQUEST_URL.SongList,
    params: params,
    interceptors: {
      responseInterceptor(res: any): ISong[] {
        return translateTopSong(res)
      }
    }
  })
}

// 歌词
function requestSongLyric(params: { id: number }) {
  return requset.get<string>({
    url: REQUEST_URL.Lyric,
    params: params,
    interceptors: {
      responseInterceptor(res: any): string {
        return res.data.lrc.lyric
      }
    }
  })
}

export { requestTopSongList, requestSongLyric }
