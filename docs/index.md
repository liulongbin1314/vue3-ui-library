---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'escook-ui 组件库'
  text: ''
  tagline: 零基础开发 Vue3 组件库
  image: /images/logo.png
  actions:
    - theme: brand
      text: 使用指南
      link: /guide/install
    - theme: brand
      text: 组件
      link: /component/button
    - theme: alt
      text: 视频教程
      link: https://www.bilibili.com/cheese/play/ss568518843

features:
  - title: 技术栈
    details: 基于 Vue3.5 的 API 开发通用组件，项目整体采用 Monorepo 的方式进行管理，组件样式采用 Sass + BEM 进行设计。
  - title: 打包发布
    details: 使用 Rollup + Gulp 进行打包构建，输出 UMD 和 EJS 的打包结果，并发布为 NPM 公共组件库，自定义 Resolver 工具函数简化组件库的按需引入。
  - title: 文档编写
    details: 采用 VitePress 编写组件库官方文档，自定义文档首页、Logo、侧边栏等；编写组件 Demo 使用户快速体验交互细节。
---
