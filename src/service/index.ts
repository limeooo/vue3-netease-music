import request from './request'
import { BASE_URL, TIME_OUT } from './config'
// import { getToken } from '@/utils/auth'

const newRequest = new request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // const token = getToken()
      // if (token) {
      //   config.headers!.Authorization = `Bearer ${token}`
      // }
      return config
    }
  }
})

export default newRequest
