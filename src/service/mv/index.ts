import request from '../index'
import { translateMv, translateMvDetail, translateMvSimi } from './translate'
import type { IRequestMv, IMvAll, IMv, IMvDetail } from './types'

enum REQUEST_URL {
  MvAll = '/mv/all',
  MvDetail = '/mv/detail',
  MvUrl = '/mv/url',
  MvSimi = '/simi/mv'
}

// 最新MV查询列表
export function requestMvAll(params: IRequestMv) {
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

// 根据ID查询MV详情
export function requestMvDetail(params: { mvid: number }) {
  return request.get<IMvDetail>({
    url: REQUEST_URL.MvDetail,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IMvDetail {
        return translateMvDetail(res)
      }
    }
  })
}

// 根据ID查询MV播放链接
export function requestMvUrl(params: { id: number }) {
  return request.get<string>({
    url: REQUEST_URL.MvUrl,
    params: params,
    interceptors: {
      responseInterceptor(res: any): string {
        return res.data.data.url
      }
    }
  })
}

// 根据ID查询MV相关推荐
export function requestMvSimi(params: { mvid: number }) {
  return request.get<IMv[]>({
    url: REQUEST_URL.MvSimi,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IMv[] {
        return translateMvSimi(res)
      }
    }
  })
}
