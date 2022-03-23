import requset from '../index'
import { IBanner } from './banner-types'

enum REQUEST_URL {
  Banner = '/banner'
}

function requestBanner() {
  return requset.get<IBanner>({
    url: REQUEST_URL.Banner
  })
}

export { requestBanner }
