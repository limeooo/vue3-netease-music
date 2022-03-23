import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './assets/css/index.less'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

// install all modules under `modules/`
Object.values(import.meta.globEager('./modules/*.ts')).map((i) =>
  i.install?.(app)
)
