# 快速开始

本节将介绍如何在项目中使用 Escook UI 组件库。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
::: code-group

```js [src/main.js]
import { createApp } from 'vue'
// 1. 导入组件库
import EscookUI from 'escook-ui'
// 2. 全量导入组件库样式
import 'escook-ui/dist/index.min.css'
import App from './App.vue'

const app = createApp(App)
// 3. 安装组件库
app.use(EscookUI)
app.mount('#app')
```

:::

### 自动按需导入

您需要使用额外的插件来导入要使用的组件，首先你需要安装 `unplugin-vue-components` 和 `unplugin-auto-import` 这两款插件：

::: code-group

```bash [npm]
npm install -D unplugin-vue-components unplugin-auto-import
```

```bash [yarn]
yarn add -D unplugin-vue-components unplugin-auto-import
```

```bash [pnpm]
pnpm install -D unplugin-vue-components unplugin-auto-import
```

:::

然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中：

#### Vite

::: code-group

```js [vite.config.js] {3-8,14-21}
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
    // 标签组件的自动导入
    Components({
      resolvers: [EscookUIResolver()]
    }),
    // 函数式组件的自动导入
    AutoImport({
      resolvers: [EscookFunctionResolver()]
    })
  ]
})
```

:::

#### Webpack

::: code-group

```js [webpack.config.js]
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { EscookUIResolver, EscookFunctionResolver } = require('escook-ui/lib/utils')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [EscookFunctionResolver()]
    }),
    Components({
      resolvers: [EscookUIResolver()]
    })
  ]
}
```

:::

想了解更多打包 ([Rollup](https://rollupjs.org/), [Vue CLI](https://cli.vuejs.org/)) 和配置工具，请参考 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install)。
