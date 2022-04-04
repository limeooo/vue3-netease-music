import request from '../index'
import { translateArtistInfo } from './translate'
import type { IArtistInfo } from './types'

enum REQUEST_URL {
  Artists = '/artists'
}

// 根据ID查询作者信息
export function requestArtists(params: { id: number }) {
  return request.get<IArtistInfo>({
    url: REQUEST_URL.Artists,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IArtistInfo {
        return translateArtistInfo(res)
      }
    }
  })
}
