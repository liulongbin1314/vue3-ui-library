# Message Box 消息弹出框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息。

:::tip 温馨提示
从设计上来说，MessageBox 的作用是美化系统自带的 `alert` 和 `confirm`，因此适合展示较为简单的内容。 如果需要弹出较为复杂的内容，请使用 Dialog。
:::

## 消息提示

当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

调用 `AMessageBox.alert` 方法以打开 alert 框。 它模拟了系统的 alert，**无法通过按下 ESC 或点击框外遮罩层关闭**。此例中接收了3个参数：`title`、`message` 和 `options` 配置选项。

值得一提的是，窗口被关闭后，它默认会返回一个 Promise 对象便于进行后续操作的处理。 若不确定浏览器是否支持 Promise，可自行引入第三方 polyfill 或使用 `options.callback` 回调进行后续处理。

::: tip 温馨提示
`AMessageBox.alert()` 弹窗时，`maskClose`、`escapeClose` 和 `cancelButtonShow` 属性的默认为 `false` 且不允许被修改，即：无法通过按下 ESC 或点击框外遮罩层关闭，且不展示取消按钮。这是 `AMessageBox.alert()` 和 `AMessageBox.confirm()` 的典型区别。
:::

:::demo

```html
message-box/alert.vue
```

:::

## 确认消息

提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

调用 `AMessageBox.confirm` 方法以打开 `confirm` 框。它模拟了系统的 confirm。 Message Box 组件也拥有极高的定制性，我们可以传入 options 作为第三个参数，它是一个字面量对象。

`type` 属性表明消息类型，可选值：`success`，`error`，`info`和 `warning`。指定了 type 属性后，会在标题左侧渲染对应的 icon 图标，并自动设置图标颜色，您可使用 `icon` 属性自定义图标，`iconSize` 属性自定义图标尺寸，`iconColor` 属性自定义图标颜色。

`AMessageBox.confirm` 方法会返回一个 Promise 来处理后续响应，您也可传入 `options.callback` 处理后续响应。

::: tip 温馨提示
`AMessageBox.alert()` 和 `AMessageBox.confirm()` 都支持 type、icon、iconSize 和 iconColor 等属性。
:::

:::demo

```html
message-box/confirm.vue
```

:::

## 个性化

消息弹框可以被定制来展示各种内容。

上面提到的两个方法都是对 `AMessageBox` 方法的二次包装。本例直接调用 `AMessageBox` 方法，使用了 `gray` 属性，用于自定义遮罩层的颜色是否为灰色。

另外可使用 `cancelButtonText` 来自定义取消按钮文本（Confirm 按钮也具有类似的属性，在文末的 API 说明中有完整属性列表）。

此例还使用了 `beforeClose` 属性，当 `beforeClose` 被赋值且被赋值为一个回调函数时，在消息弹框被关闭之前将会被调用，并且可以通过该方法来阻止弹框被关闭。它是一个接收两个参数的方法（`action` 操作类型和 `done` 关闭函数）。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加 loading 状态等；此时若需要关闭实例，可以调用` done` 函数（若在 `beforeClose` 中没有调用 `done`，则弹框便不会关闭）。

:::demo

```html
message-box/custom.vue
```

:::

## 区分取消操作与关闭操作

有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。

默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，Promise 的 reject 回调和 callback 回调的 `action` 参数均为字符串 `'cancel'`。 如果将 `distinguishCancelAndClose` 属性设置为 `true`，则上述两种行为的参数分别为 `'cancel'` 和 `'close'`。

::: tip 温馨提示
在下面的示例中，点击取消按钮获取到的 `action` 操作类型为 `cancel`，而点击弹窗的遮罩层、右上角的关闭按钮或按下 ESC 键时，得到的 `action` 操作类型为 `close`。
:::

:::demo

```html
message-box/distinguishCancelAndClose.vue
```

:::

## 全局方法

如果你完整引入了 Escook UI，它会为 `app.config.globalProperties` 添加如下全局方法：`$msgbox`、 `$alert`、 `$confirm`。 因此在 Vue 实例中可以采用本页面中的方式来调用 MessageBox。 参数如下：

- `$msgbox(options)`
- `$alert(title, message, options)`
- `$confirm(title, message, options)`

## MessageBox API

### 配置选项

| 属性       | 说明                       | 类型                                                 | 默认值 |
| :--------- | :------------------------- | :--------------------------------------------------- | :----- |
| type       | 弹窗标题左侧的图标类型     | `string`                                             | -      |
| message    | 消息内容                   | `string`                                             | -      |
| gray       | 是否为灰色的遮罩层         | `boolean`                                            | true   |
| blur       | 是否显示毛玻璃的遮罩层效果 | `boolean`                                            | true   |
| penetrable | 遮罩层的点击是否可穿透     | `boolean`                                            | false  |
| icon       | 标题左侧的 icon 图标       | `string` 或 svg 图标组件                             | -      |
| iconSize   | 标题左侧的图标尺寸         | `number`                                             | 24     |
| iconColor  | 标题左侧的图标颜色         | `string`                                             | -      |
| callback   | 弹窗关闭后的回调           | `(action: 'confirm' \| 'cancel' \| 'close') => void` | -      |

### 继承自 Dialog 的配置选项

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
| beforeClose               | 弹窗关闭前的回调，可自定义弹窗关闭前的逻辑，不调用 `done` 则阻止关闭弹窗      | `(action: 'confirm' \| 'cancel' \| 'close', done: Function) => void` | -       |
