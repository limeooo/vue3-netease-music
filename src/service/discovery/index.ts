import request from '../index'
import {
  translateBanner,
  translatePersonalizedSong,
  translatePersonalizedPlaylist,
  translatePersonalizedMv
} from './translate'
import type { IBanner } from './types'
import type { ISong } from '@/service/song/types'
import type { IPlaylist } from '@/service/playlist/types'
import type { IMv } from '@/service/mv/types'

enum REQUEST_URL {
  Banner = '/banner',
  PersonalizedPlaylist = '/personalized',
  PersonalizedSong = '/personalized/newsong',
  PersonalizedMv = '/personalized/mv'
}

// 请求轮播图数据
export function requestBanner() {
  return request.get<IBanner[]>({
    url: REQUEST_URL.Banner,
    interceptors: {
      responseInterceptor(res: any): IBanner[] {
        return translateBanner(res)
      }
    }
  })
}

// 获取最新音乐数据
export function requestPersonalizedSong(params: { limit: number }) {
  return request.get<ISong[]>({
    url: REQUEST_URL.PersonalizedSong,
    params: params,
    interceptors: {
      responseInterceptor(res: any): ISong[] {
        return translatePersonalizedSong(res)
      }
    }
  })
}

// 获取推荐歌单数据
export function requestPersonalizedPlaylist(params: { limit: number }) {
  return request.get<IPlaylist[]>({
    url: REQUEST_URL.PersonalizedPlaylist,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IPlaylist[] {
        return translatePersonalizedPlaylist(res)
      }
    }
  })
}

// 获取推荐Mv数据
export function requestPersonalizedMv(params: { limit: number }) {
  return request.get<IMv[]>({
    url: REQUEST_URL.PersonalizedMv,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IMv[] {
        return translatePersonalizedMv(res)
      }
    }
  })
}
