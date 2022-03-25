import request from './request'
import { BASE_URL, TIME_OUT } from './config'

/**
 * 请求对象
 */
const newRequest = new request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default newRequest
