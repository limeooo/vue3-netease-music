import requset from '../index'
import { translateTopPlaylist } from './translate'
import type { IPlaylistAll } from './types'

enum REQUEST_URL {
  TopPlaylist = '/top/playlist',
  TopPlaylistHighquality = '/top/playlist/highquality'
}

// 网友精选碟歌单 精品歌单推荐
function requestTopPlaylistHighquality(params: { limit: number }) {
  return requset.get<IPlaylistAll>({
    url: REQUEST_URL.TopPlaylistHighquality,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IPlaylistAll {
        return translateTopPlaylist(res)
      }
    }
  })
}

export { requestTopPlaylistHighquality }
