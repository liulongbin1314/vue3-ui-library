import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// 把大驼峰命名法的名字，转换成连字符的格式
// AButton  ->  a-button
// AButtonGroup  ->  a-button-group
const toKebabCase = (name) => {
  return name
    .replace(/([A-Z]+)([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
}

console.log(toKebabCase('AButton'))

// 实现 EscookUI 组件的自动导入
// 形参中的 name 是组件的名字 AButton  ACheckboxGroup
const EscookUIResolver = (mtype = 'es') => {
  return (name) => {
    console.log(name)

    // 如果组件的 name 名称以字母 A 开头，则从 escook-ui 中自动加载组件及样式
    if (name.startsWith('A')) {
      const componentName = toKebabCase(name)
      const dirname = componentName.slice(2)

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
    })
  ],
  server: {
    open: true
  }
})
