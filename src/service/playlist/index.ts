import request from '../index'
import { translateTopPlaylist, translatePlaylistDetail } from './translate'
import type { IPlaylistAll, IPlaylistDetail } from './types'

enum REQUEST_URL {
  TopPlaylist = '/top/playlist',
  TopPlaylistHighquality = '/top/playlist/highquality',
  PlaylistDetail = '/playlist/detail'
}

// 根据个数获取网友精选碟歌单
function requestTopPlaylistHighquality(params: { limit: number }) {
  return request.get<IPlaylistAll>({
    url: REQUEST_URL.TopPlaylistHighquality,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IPlaylistAll {
        return translateTopPlaylist(res)
      }
    }
  })
}

// 根据类型cat和偏移量获取推荐歌单列表
function requestTopPlaylist(params: { cat: string; offset: number }) {
  return request.get<IPlaylistAll>({
    url: REQUEST_URL.TopPlaylist,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IPlaylistAll {
        return translateTopPlaylist(res)
      }
    }
  })
}

// 根据id获取歌单详情
function requestPlaylistDetail(params: { id: string | number }) {
  return request.get<IPlaylistDetail>({
    url: REQUEST_URL.PlaylistDetail,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IPlaylistDetail {
        return translatePlaylistDetail(res)
      }
    }
  })
}

export {
  requestTopPlaylistHighquality,
  requestTopPlaylist,
  requestPlaylistDetail
}
