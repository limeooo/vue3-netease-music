/**
 * 请求对象配置
 */
let BASE_URL = ''
const TIME_OUT = 5000

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = '/api'
    break
  case 'production':
    BASE_URL = 'https://music.api.limeooo.cloud'
    break
  default:
    BASE_URL = 'https://music.api.limeooo.cloud'
    break
}

export { BASE_URL, TIME_OUT }
