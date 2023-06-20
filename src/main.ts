import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index.ts'
import { createPinia } from 'pinia'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ElementPlus)

app.mount('#app')
