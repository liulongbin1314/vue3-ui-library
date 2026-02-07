# Drawer 抽屉

有些时候，Dialog 组件并不满足我们的需求，比如你的表单很长，亦或是你需要临时展示一些文档，Drawer 拥有和 Dialog 几乎相同的 API，在 UI 上带来不一样的体验。

::: tip 温馨提示
Drawer 除了不支持 Dialog 组件 `fixed-screen` 属性之外，其属性完全支持，请参照 [Dialog 的 API 文档](./dialog.html) 进行使用。
:::

## 基础用法

呼出一个临时的侧边栏，可以从多个方向呼出。

你必须像 Dialog 一样为 Drawer 设置 `v-model` 属性来控制 Drawer 的显示与隐藏状态，该属性接受一个 `boolean` 类型。

Drawer 包含三部分：title & body & footer, 其中 `title` 是属性，用来设置标题，默认情况下它是一个空字符串；`body` 部分是 Drawer 组件的主区域，可通过 `default` 默认插槽指定要渲染的内容。`footer` 插槽用来自定义页脚信息。

当 Drawer 打开时，默认设置是从右至左打开 `400px` 的宽度，你可以通过传入对应的 `placement` 和 `size` 属性来修改这一默认行为。更多详细用法请参考页面底部的 API 部分。

:::demo

```html
drawer/basis.vue
```

:::

## 圆角弹窗

可使用 `round` 属性渲染圆角弹窗，特别注意：当 `placement` 属性值为 `left` 或 `right` 时 `round` 属性不生效。

当 `placement` 属性值为 `top` 时，弹窗的**左下角**和**右下角**为圆角。

当 `placement` 属性值为 `bottom` 时，弹窗的**左上角**和**右上角**为圆角。

:::demo

```html
drawer/round.vue
```

:::

## Drawer API

### Attributes

| 属性                      | 说明                                                                          | 类型                                                                 | 默认值  |
| :------------------------ | :---------------------------------------------------------------------------- | :------------------------------------------------------------------- | :------ |
| placement                 | 弹窗停靠的位置                                                                | `enum`：`left`、`right`、`top`、`bottom`                             | right   |
| round                     | 是否为圆角弹窗。此属性仅对 `placement` 属性值为 `top` 或 `bottom` 时生效      | `boolean`                                                            | false   |
| title                     | 弹窗的标题                                                                    | `string`                                                             | -       |
| footer                    | 是否展示弹窗的按钮区域                                                        | `boolean`                                                            | true    |
| showClose                 | 是否展示弹窗右上角的关闭图标                                                  | `boolean`                                                            | true    |
| buttonSize                | 弹窗底部操作按钮的尺寸                                                        | `enum`: `small`、`default`、`large`                                  | default |
| cancelButtonText          | 自定义取消按钮的文本                                                          | `string`                                                             | '取消'  |
| confirmButtonText         | 自定义确定按钮的文本                                                          | `string`                                                             | '确认'  |
| cancelButtonShow          | 是否展示取消按钮                                                              | `boolean`                                                            | true    |
| confirmButtonShow         | 是否展示确认按钮                                                              | `boolean`                                                            | true    |
| escapeClose               | ESC 键是否可以触发弹窗的关闭行为                                              | `boolean`                                                            | true    |
| distinguishCancelAndClose | 是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 Esc 键）进行区分 | `boolean`                                                            | false   |
| destroyOnClosed           | 弹窗关闭后是否销毁                                                            | `boolean`                                                            | false   |
| width                     | 弹窗的宽度                                                                    | `number` \| `string`                                                 | 500px   |
| lockScroll                | 是否禁用背景滚动                                                              | `boolean`                                                            | false   |
| cancelLoading             | 是否展示取消按钮的 loading 状态                                               | `boolean`                                                            | false   |
| confirmLoading            | 是否展示确认按钮的 loading 状态                                               | `boolean`                                                            | false   |
| gray                      | 遮罩层的颜色是否为半透明的灰色                                                | `boolean`                                                            | false   |
| blur                      | 遮罩层是否显示为毛玻璃效果                                                    | `boolean`                                                            | true    |
| penetrable                | 遮罩层的点击是否可穿透，必须把 `blur` 和 `gray` 设置为 `false` 才能生效       | `boolean`                                                            | false   |
| maskClose                 | 是否点击遮罩层可关闭弹窗                                                      | `boolean`                                                            | true    |
| beforeClose               | 弹窗关闭前的回调，可自定义弹窗关闭前的逻辑，不调用 `done` 则阻止关闭弹窗      | `(action: 'confirm' \| 'cancel' \| 'close', done: Function) => void` | -       |

### Slots

| 插槽名  | 说明                                                                                                                                                                           |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default | Dialog 的默认内容                                                                                                                                                              |
| footer  | Dialog 按钮操作区的内容                                                                                                                                                        |
| icon    | Header 区域的 Icon 图标，通过作用域插槽 `colors` 返回作用域数据，格式为 `{colors: Object}`。其中 `colors` 属性对象中包含 `primary`、`success`、`warning`、`error` 4 个颜色属性 |

### Events

| 名称   | 说明                        | Type                                                     |
| :----- | :-------------------------- | :------------------------------------------------------- |
| open   | Dialog 打开的回调           | `() => void`                                             |
| opened | Dialog 打开动画结束时的回调 | `() => void`                                             |
| close  | Dialog 关闭的回调           | `(action: 'confirm' \| 'cancel' \| 'close') => void`     |
| closed | Dialog 关闭动画结束时的回调 | `(action: 'confirm' \| 'cancel' \| 'close', el) => void` |
