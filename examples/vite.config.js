import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 用于实现标签组件的自动导入
import Components from 'unplugin-vue-components/vite'
// 用于实现函数式组件的自动导入
import AutoImport from 'unplugin-auto-import/vite'
// 实现组件的自动导入，得到 resolver 函数
import { EscookUIResolver, EscookFunctionResolver } from 'escook-ui/es/utils'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [EscookUIResolver()]
    }),
    AutoImport({
      resolvers: [EscookFunctionResolver()]
    })
  ],
  server: {
    open: true
  }
})
