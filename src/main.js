import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/scss/main.scss"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(ElementPlus)
  .use(pinia)
  .mount('#app')

