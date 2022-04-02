import request from '../index'
import { translateMv } from './translate'
import type { IRequestMv, IMvAll } from './types'

enum REQUEST_URL {
  MvAll = '/mv/all'
}

// 最新MV查询列表
export function requestUserPlaylistInfo(params: IRequestMv) {
  return request.get<IMvAll>({
    url: REQUEST_URL.MvAll,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IMvAll {
        return translateMv(res)
      }
    }
  })
}
