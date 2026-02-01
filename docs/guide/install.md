# 安装

本节将介绍如何在项目中安装 Escook UI 组件库。

## 使用包管理器

我们建议您使用包管理器（如 NPM、[Yarn](https://classic.yarnpkg.com/lang/en/) 或 [pnpm](https://pnpm.io/)）安装 Escook UI 组件库，然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev/) 或 [webpack](https://webpack.js.org/)。

选择一个你喜欢的包管理器，开始安装吧：

::: code-group

```bash [npm]
npm install escook-ui@latest
```

```bash [yarn]
yarn add escook-ui@latest
```

```bash [pnpm]
pnpm install escook-ui@latest
```

:::

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm) 或使用 [npmmirror](https://npmmirror.com/)：

```bash
npm config set registry https://registry.npmmirror.com
```

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 Escook UI，然后就可以使用全局变量 `EscookUI` 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com/) 和 [jsDelivr](https://jsdelivr.com/) 举例。 你也可以使用其它的 CDN 供应商。

### unpkg

```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="https://unpkg.com/escook-ui@latest/dist/index.min.css" />
  <!-- 导入 vue3 -->
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <!-- 导入组件库 -->
  <script src="https://unpkg.com/escook-ui@latest/dist/index.full.min.js"></script>
  <!-- 导入 Svg 图标 -->
  <script src="https://unpkg.com/escook-ui@latest/dist/icon.full.min.js"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/escook-ui@latest/dist/index.min.css" />
  <!-- 导入 vue3 -->
  <script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
  <!-- 导入组件库 -->
  <script src="https://cdn.jsdelivr.net/npm/escook-ui@latest/dist/index.full.min.js"></script>
  <!-- 导入 Svg 图标 -->
  <script src="https://cdn.jsdelivr.net/npm/escook-ui@latest/dist/icon.full.min.js"></script>
</head>
```

:::tip 温馨提示
我们建议使用 CDN 引入 Escook UI 组件库的用户在链接地址上锁定版本，以免将来 Escook UI 升级时受到非兼容性更新的影响。 锁定版本的方法请查看 [unpkg.com](https://unpkg.com/)。
:::
