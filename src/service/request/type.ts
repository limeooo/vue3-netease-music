import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface requestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface requestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: requestInterceptors<T>
  showLoading?: boolean
}

export { requestInterceptors, requestConfig }
