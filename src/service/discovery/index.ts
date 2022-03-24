import requset from '../index'
import { translateBanner } from './translate'
import type { IBanner } from './types'

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
