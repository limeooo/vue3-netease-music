/**
 * axios请求封装
 */
import axios from 'axios'
import { debounce } from '@/utils'
import type { AxiosInstance } from 'axios'
import type { requestInterceptors, requestConfig } from './type'

import { ElLoading, ElNotification } from 'element-plus'
import 'element-plus/es/components/loading/style/css'
import 'element-plus/es/components/notification/style/css'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEAFULT_LOADING = true

class requset {
  instance: AxiosInstance
  interceptors?: requestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: requestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    const closeLoding = debounce(() => {
      this.loading?.close()
      this.loading = undefined
    }, 1000)

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading && !this.loading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载中...',
            background: 'rgba(255, 255, 255, 0.3)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        closeLoding()
        return res
      },
      (err) => {
        ElNotification({
          title: '错误',
          message: '这次请求失败啦～',
          type: 'error',
          offset: 50
        })
        closeLoding()
        // if (err.response.status === 404) {
        //   console.log('404错误')
        // }
        return err
      }
    )
  }

  request<T = any>(config: requestConfig<any>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 2.判断每个请求单独是否需要显示loading
      if (config.showLoading === false) {
        // this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.将showLoading设置true, 这样不会影响下一个请求
          // this.showLoading = DEAFULT_LOADING

          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          if (config.interceptors?.responseInterceptorCatch) {
            err = config.interceptors.responseInterceptorCatch(err)
          }
          // 将showLoading设置true, 这样不会影响下一个请求
          // this.showLoading = DEAFULT_LOADING

          reject(err)
        })
    })
  }

  get<T = any>(config: requestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: requestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: requestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: requestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default requset
