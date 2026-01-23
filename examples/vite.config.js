import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// 实现 EscookUI 组件的自动导入
// 形参中的 name 是组件的名字 AButton  ACheckboxGroup
const EscookUIResolver = (mtype = 'es') => {
  return (name) => {
    console.log(name)

    // 如果组件的 name 名称以字母 A 开头，则从 escook-ui 中自动加载组件及样式
    if (name.startsWith('A')) {
      return {
        // 需要自动导入的组件的名字
        name,
        // 导入的路径（模块、包名）
        from: 'escook-ui',
        // 副作用
        sideEffects: [`escook-ui/${mtype}/components/button/src/style/index.js`]
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [EscookUIResolver()]
    })
  ],
  server: {
    open: true
  }
})
