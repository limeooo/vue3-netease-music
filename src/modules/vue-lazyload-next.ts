import type { App } from 'vue'
import VueLazyloadNext from 'vue-lazyload-next'

import Error from '@/assets/svg/loading-error.svg'
import Loading from '@/assets/svg/loading-audio.svg'

export const install = (app: App) => {
  app.use(VueLazyloadNext, {
    error: Error,
    loading: Loading
  })
}
