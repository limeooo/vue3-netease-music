import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// 引入公共样式
import './assets/css/index.less'
// 引入vite-plugin-svg-icons包 生成 svg 雪碧图
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

// 注册./modules文件夹下面的所有后缀为ts的插件
Object.values(import.meta.globEager('./modules/*.ts')).map((i) =>
  i.install?.(app)
)

import { ElNotification } from 'element-plus'
import 'element-plus/es/components/notification/style/css'
ElNotification({
  type: 'warning',
  title: '提示',
  message:
    '由于本站音乐为直接获取网易云Api接口数据、导致有小部分音乐因不可控原因无法正常播放、敬请谅解～',
  duration: 0,
  offset: 10
})
