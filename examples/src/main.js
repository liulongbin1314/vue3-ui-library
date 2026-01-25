import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入组件库
// import AUi from '../../packages'
// 全量导入主题包
// import '@ui-library/theme/src/index.scss'
// 按需导入主题包
// import '@ui-library/components/button/src/style'

const app = createApp(App)
// 安装组件库插件
// app.use(AUi)

app.mount('#app')
