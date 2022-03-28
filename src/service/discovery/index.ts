import requset from '../index'
import {
  translateBanner,
  translatePersonalizedSong,
  translatePersonalizedPlaylist
} from './translate'
import type { IBanner } from './types'
import type { ISong } from '@/service/song/types'
import type { IPlaylist } from '@/service/playlist/types'

enum REQUEST_URL {
  Banner = '/banner',
  PersonalizedPlaylist = '/personalized',
  PersonalizedSong = '/personalized/newsong'
}

// 请求轮播图数据
export function requestBanner() {
  return requset.get<IBanner[]>({
    url: REQUEST_URL.Banner,
    interceptors: {
      responseInterceptor(res: any): IBanner[] {
        return translateBanner(res)
      }
    }
  })
}

// 首页发现音乐获取最新音乐数据
export function requestPersonalizedSong(params: { limit: number }) {
  return requset.get<ISong[]>({
    url: REQUEST_URL.PersonalizedSong,
    params: params,
    interceptors: {
      responseInterceptor(res: any): ISong[] {
        return translatePersonalizedSong(res)
      }
    }
  })
}

// 首页推荐歌单获取最新音乐数据
export function requestPersonalizedPlaylist(params: { limit: number }) {
  return requset.get<IPlaylist[]>({
    url: REQUEST_URL.PersonalizedPlaylist,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IPlaylist[] {
        return translatePersonalizedPlaylist(res)
      }
    }
  })
}
