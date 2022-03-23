import requset from '../index'
import { IBanner } from './types'
import { translateBanner } from './translate'

enum REQUEST_URL {
  Banner = '/banner'
}

function requestBanner() {
  return requset.get<IBanner[]>({
    url: REQUEST_URL.Banner,
    interceptors: {
      responseInterceptor(res: any): IBanner[] {
        return translateBanner(res)
      }
    }
  })
}

export { requestBanner }
