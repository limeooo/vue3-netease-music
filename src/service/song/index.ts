import requset from '../index'
import { translateTopSong, translateSong } from './translate'
import type { ISong } from './types'

enum REQUEST_URL {
  SongList = '/top/song',
  SongLyric = '/lyric',
  SongDetail = '/song/detail'
}

// 根据类型获取最新音乐
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

// 根据歌曲id获取歌词歌词
function requestSongLyric(params: { id: number }) {
  return requset.get<string>({
    url: REQUEST_URL.SongLyric,
    params: params,
    interceptors: {
      responseInterceptor(res: any): string {
        return res.data.lrc.lyric
      }
    }
  })
}

// 根据歌曲ids获取歌曲列表详情信息
function requestSongDetail(params: { ids: string }) {
  return requset.get<ISong[]>({
    url: REQUEST_URL.SongDetail,
    params: params,
    interceptors: {
      responseInterceptor(res: any): ISong[] {
        return translateSong(res)
      }
    }
  })
}

export { requestTopSongList, requestSongLyric, requestSongDetail }
