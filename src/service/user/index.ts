import requset from '../index'
import { translateUserInfo, translateUserPlaylistInfo } from './translate'
import type { IUserInfo, IUserPlaylistInfoAll } from './types'

import { ElNotification } from 'element-plus'
import 'element-plus/es/components/notification/style/css'

enum REQUEST_URL {
  UserInfo = '/user/detail',
  UserPlaylistInfo = '/user/playlist'
}

// 用户登录
export function requsetUserInfo(params: { uid: number }) {
  return requset.get<IUserInfo>({
    url: REQUEST_URL.UserInfo,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IUserInfo {
        return translateUserInfo(res)
      },
      responseInterceptorCatch() {
        ElNotification({
          title: '错误',
          message: '您的这次登录失败啦～<br>请检查您填写的UID是否正确',
          type: 'error',
          offset: 50,
          dangerouslyUseHTMLString: true
        })
      }
    }
  })
}

// 用户歌单信息
export function requsetUserPlaylistInfo(params: {
  uid: number
  limit: number
}) {
  return requset.get<IUserPlaylistInfoAll>({
    url: REQUEST_URL.UserPlaylistInfo,
    params: params,
    interceptors: {
      responseInterceptor(res: any): IUserPlaylistInfoAll {
        return translateUserPlaylistInfo(res, params.uid)
      }
    }
  })
}
