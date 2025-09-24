import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入组件库
import AUi from '../../packages'

const app = createApp(App)
// 安装组件库插件
app.use(AUi)

app.mount('#app')
