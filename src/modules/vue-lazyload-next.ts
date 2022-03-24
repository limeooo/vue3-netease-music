/**
 * 图片懒加载功能注册，性能优于 element-plus el-image 组件的图片懒加载，官网 https://github.com/caozhong1996/vue-lazyload-next
 */
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
