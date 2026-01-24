import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 用于实现标签组件的自动导入
import Components from 'unplugin-vue-components/vite'
// 用于实现函数式组件的自动导入
import AutoImport from 'unplugin-auto-import/vite'

// 把大驼峰命名法的名字，转换成连字符的格式
// AButton  ->  a-button
// AButtonGroup  ->  a-button-group
const toKebabCase = (name) => {
  return name
    .replace(/([A-Z]+)([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
}

const name2dir = {
  // 组件名: 文件夹名字
  'checkbox-all': 'checkbox',
  'checkbox-group': 'checkbox',
  'radio-group': 'radio',
  'form-item': 'form',
  aside: 'container',
  footer: 'container',
  header: 'container',
  main: 'container'
}

// 实现 EscookUI 组件的自动导入
// 形参中的 name 是组件的名字 AButton  ACheckboxGroup
const EscookUIResolver = (mtype = 'es') => {
  return (name) => {
    // 如果组件的 name 名称以字母 A 开头，则从 escook-ui 中自动加载组件及样式
    if (name.startsWith('A')) {
      const componentName = toKebabCase(name).slice(2)
      const dirname = name2dir[componentName] || componentName

      return {
        // 需要自动导入的组件的名字
        name,
        // 导入的路径（模块、包名）
        from: 'escook-ui',
        // 副作用
        sideEffects: [`escook-ui/${mtype}/components/${dirname}/src/style/index.js`]
      }
    }
  }
}

// 实现函数式组件的自动导入
const EscookFunctionResolver = (mtype = 'es') => {
  return (name) => {
    // 如果组件的 name 名称以字母 A 开头，则从 escook-ui 中自动加载组件及样式
    if (name === 'AMessage' || name === 'AMessageBox') {
      const componentName = toKebabCase(name).slice(2)
      const dirname = name2dir[componentName] || componentName

      return {
        // 需要自动导入的组件的名字
        name,
        // 导入的路径（模块、包名）
        from: 'escook-ui',
        // 副作用
        sideEffects: [`escook-ui/${mtype}/components/${dirname}/src/style/index.js`]
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
    }),
    AutoImport({
      resolvers: [EscookFunctionResolver()]
    })
  ],
  server: {
    open: true
  }
})
