# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

需要设置 `v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。 Dialog 分为两个部分：body 和 footer，可使用 `footer` 具名 slot 自定义 footer 区域的内容。 `title` 属性用于定义标题，它是可选的，默认值为空。

:::demo

```html
dialog/basis.vue
```

:::

## 自定义内容

对话框的内容可以是任何东西，甚至是一个表单。此示例显示如何在 Dialog 中使用 Escook UI 的表单。

:::demo

```html
dialog/custom-content.vue
```

:::

## before-close

`before-close` 是关闭前的回调，必须是函数，类型为 `(action: 'confirm' | 'cancel' | 'close', done: Function) => void`，会暂停 Dialog 的关闭。回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候。

另外，可通过 `confirm-loading` 属性控制 `before-close` 期间是否在 Confirm 按钮上展示 loading。

:::demo

```html
dialog/before-close.vue
```

:::

## 关闭时销毁

使用 `destroy-on-closed` 属性实现 Dialog 关闭后销毁内容。

如果内容区域包含表单相关的组件，当表单组件绑定了 `v-model` 时，`destroy-on-closed` 属性不会生效，组件的状态需要监听 Dialog 的 `@closed` 事件手动重置。

:::demo

```html
dialog/destroy-on-closed.vue
```

:::

## 可穿透

使用 `penetrable` 属性控制是否允许穿透遮罩层，从而操作遮罩层后面的元素。

::: tip 温馨提示
`penetrable` 属性生效的前提是：`blur` 和 `gray` 属性的值必须是 `false`。
:::

:::demo

```html
dialog/penetrable.vue
```

:::

## 个性化

Dialog 组件提供了一系列的属性，允许您个性化弹窗组件的显示效果。

例如：

- 使用 `blur` 属性控制是否展示毛玻璃效果；
- 使用 `gray` 属性控制遮罩层是否显示为灰色；
- 使用 `show-close` 属性控制是否展示右上角的关闭图标；
- 使用 `button-size` 属性控制 Footer 按钮的尺寸；
- 使用 `cancel-button-show` 属性控制是否展示取消按钮；
- 使用 `escape-close` 属性控制按下 ESC 键是否关闭弹窗；
- 使用 `mask-close` 属性控制点击遮罩层是否关闭弹窗；

更多的个性化属性，请翻阅 Dialog 组件的 API。

:::demo

```html
dialog/custom-ui.vue
```

:::

## 区分取消操作与关闭操作

有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。

默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，通过事件获取到的 `action` 参数均为字符串 `'cancel'`。 如果将 `distinguishCancelAndClose` 属性设置为 `true`，则上述两种行为的参数分别为 `'cancel'` 和 `'close'`。

::: tip 温馨提示
在下面的第2个示例中，点击取消按钮获取到的 `action` 操作类型为 `cancel`，而点击弹窗的遮罩层、右上角的关闭按钮或按下 ESC 键时，得到的 `action` 操作类型为 `close`。
:::

:::demo

```html
dialog/distinguish-cancel-and-close.vue
```

:::

## 禁用背景滚动

使用 `lock-scroll` 属性控制是否在 Dialog 出现时将 body 滚动锁定。

:::demo

```html
dialog/lock-scroll.vue
```

:::

## 内容可滚动

当 Dialog 的内容过多导致一屏无法完整展示的时候，可使用 `fixed-screen` 属性，把 Dialog 的 Header 和 Footer 固定在屏幕可视区域显示，从而让内容可滚动，提高用户的弹窗体验。

:::demo

```html
dialog/fixed-screen.vue
```

:::

## loading 状态

在执行 `before-close` 操作期间，可使用 `cancel-loading` 和 `confirm-loading` 属性控制**是否自动**在**取消**和**确认**按钮上展示 loading 状态。

:::demo

```html
dialog/loading.vue
```

:::

## Dialog API

### Attributes

| 属性                      | 说明                                                                          | 类型                                                                 | 默认值  |
| :------------------------ | :---------------------------------------------------------------------------- | :------------------------------------------------------------------- | :------ |
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
| fixedScreen               | 是否允许弹窗的内容区域在屏幕上滚动（首尾固定在浏览器可视区域进行展示）        | `boolean`                                                            | false   |
| cancelLoading             | 是否展示取消按钮的 loading 状态                                               | `boolean`                                                            | false   |
| confirmLoading            | 是否展示确认按钮的 loading 状态                                               | `boolean`                                                            | false   |
| gray                      | 遮罩层的颜色是否为半透明的灰色                                                | `boolean`                                                            | false   |
| blur                      | 遮罩层是否显示为毛玻璃效果                                                    | `boolean`                                                            | true    |
| penetrable                | 遮罩层的点击是否可穿透，必须把 `blur` 和 `gray` 设置为 `false` 才能生效       | `boolean`                                                            | false   |
| maskClose                 | 是否点击遮罩层可关闭弹窗                                                      | `boolean`                                                            | true    |
| beforeClose               | 弹窗关闭前的回调，可自定义弹窗关闭前的逻辑，不调用 `done` 则阻止关闭弹窗      | `(action: 'confirm' \| 'cancel' \| 'close', done: Function) => void` | -       |

### Slots

| 插槽名  | 说明                    |
| :------ | :---------------------- |
| default | Dialog 的默认内容       |
| footer  | Dialog 按钮操作区的内容 |

### Events

| 名称   | 说明                        | Type                                                     |
| :----- | :-------------------------- | :------------------------------------------------------- |
| open   | Dialog 打开的回调           | `() => void`                                             |
| opened | Dialog 打开动画结束时的回调 | `() => void`                                             |
| close  | Dialog 关闭的回调           | `(action: 'confirm' \| 'cancel' \| 'close') => void`     |
| closed | Dialog 关闭动画结束时的回调 | `(action: 'confirm' \| 'cancel' \| 'close', el) => void` |
