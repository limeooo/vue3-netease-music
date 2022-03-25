import request from '../index'
import { translateComment } from './translate'
import { CommentTransType } from './types'
import type {
  ICommentData,
  ICommentHotParams,
  ICommentNewParams
} from './types'

enum REQUEST_URL {
  CommentHot = '/comment/hot',
  CommentNew = '/comment/new'
}

// 请求最热评论数据
export function requestHotComment(params: ICommentHotParams) {
  return request.get<ICommentData>({
    url: REQUEST_URL.CommentHot,
    params: params,
    interceptors: {
      responseInterceptor(res: any): ICommentData {
        return translateComment(res, CommentTransType.Hot)
      }
    }
  })
}

// 请求最新评论数据
export function requestNewComment(params: ICommentNewParams) {
  return request.get<ICommentData>({
    url: REQUEST_URL.CommentNew,
    params: params,
    interceptors: {
      responseInterceptor(res: any): ICommentData {
        return translateComment(res, CommentTransType.New)
      }
    }
  })
}
