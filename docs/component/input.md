# Input 输入框

通过键盘输入字符。

## 基础用法

`<a-input>` 输入框组件可使用 `v-model` 指令进行数据的双向绑定，`placeholder` 属性用于设置占位符文本。

:::tip 温馨提示
输入框组件默认会占满父容器的宽度，可设置 `width` 属性固定其宽度，例如：`width="240"` 或 `width="240px"`。
:::

:::demo

```html
input/basis.vue
```

:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件。

:::demo

```html
input/disabled.vue
```

:::

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框。

:::demo

```html
input/clearable.vue
```

:::

## 密码框

使用 `password` 属性即可得到一个可切换显示隐藏的密码框。
:::demo

```html
input/password.vue
```

:::

## 圆角输入框

使用 `round` 属性即可得到一个两端圆弧形状的输入框。
:::demo

```html
input/round.vue
```

:::

## 宽度与尺寸

使用 `width` 属性设置文本框的宽度；使用 `size` 属性设置文本框的尺寸，可选值：small、default、large。
:::demo

```html
input/width-size.vue
```

:::

## 最大输入长度

使用 `max-length` 属性设置文本框的最大输入长度。
:::demo

```html
input/max-length.vue
```

:::

## 字数统计

使用 `count` 属性统计文本框中的字符个数，文本超限后会显示为红色。

:::tip 温馨提示
`count` 属性必须配合 `max-length` 属性才能生效！
:::

:::demo

```html
input/count.vue
```

:::

## 带图标的输入框

可使用 `prefix-icon` 属性设置左侧图标，使用 `suffix-icon` 属性设置右侧图标，支持内置的字体图标和 svg 图标。
:::demo

```html
input/icon.vue
```

:::

## 前缀与后缀文本

使用 `prefix` 属性设置文本框**内部左侧**的**文本前缀**，使用 `suffix` 属性设置文本框**内部右侧**的**文本后缀**。
:::demo

```html
input/prefix-suffix.vue
```

:::

## 前置与后置区域

使用 `prepend` 属性设置文本框**外部左侧**的前置文本，使用 `append` 属性设置文本框**外部右侧**的后置文本。

使用 `prepend` 具名 slot 设置文本框**外部左侧**的前置内容，使用 `append` 具名 slot 设置文本框**外部右侧**的后置内容，例如图标、按钮等复杂内容。
:::demo

```html
input/prepend-append.vue
```

:::

## Input API

### Input Attributes

| 属性        | 说明                                                | 类型                          | 默认值  |
| :---------- | :-------------------------------------------------- | :---------------------------- | :------ |
| disabled    | 是否禁用                                            | `boolean`                     | false   |
| placeholder | 文本占位符                                          | `string`                      | -       |
| size        | 尺寸                                                | `enum`：small、default、large | default |
| round       | 是否两端半圆形                                      | `boolean`                     | false   |
| password    | 是否密码框                                          | `boolean`                     | false   |
| clearable   | 是否允许一键清空                                    | `boolean`                     | false   |
| width       | 输入框宽度                                          | `string`                      | -       |
| maxLength   | 最大输入长度                                        | `string` 或 `number`          | -       |
| count       | 是否进行字数统计，必须配合 `maxLength` 属性一起使用 | `boolean`                     | false   |
| prefixIcon  | 前缀图标，值为字体图标类名或 svg 图标组件           | `string` 或 `object`          | -       |
| suffixIcon  | 后缀图标，值为字体图标类名或 svg 图标组件           | `string` 或 `object`          | -       |
| prefix      | 输入框**内部左侧**的前缀文本内容                    | `string`                      | -       |
| suffix      | 输入框**内部右侧**的后缀文本内容                    | `string`                      | -       |
| prepend     | 输入框**外部左侧**的前置文本内容                    | `string`                      | -       |
| append      | 输入框**外部右侧**的后置文本内容                    | `string`                      | -       |

### Input Events

| 事件名            | 说明                                                               | 类型                             |
| :---------------- | :----------------------------------------------------------------- | :------------------------------- |
| input             | 在 Input 值改变时触发                                              | `(value, e: InputEvent) => void` |
| change            | 仅当 modelValue 改变时，当输入框失去焦点<br/>或用户按 Enter 时触发 | `(value, e?: Event) => void`     |
| clear             | 在点击由 clearable 属性生成的清空按钮时触发                        | `() => void`                     |
| blur              | 当选择器的输入框失去焦点时触发                                     | `(e: FocusEvent) => void`        |
| focus             | 当选择器的输入框获得焦点时触发                                     | `(e: FocusEvent) => void`        |
| mouseenter        | 当鼠标进入输入元素时触发                                           | `(e: MouseEvent) => void`        |
| mouseleave        | 当鼠标离开输入元素时触发                                           | `(e: MouseEvent) => void`        |
| keydown           | 按下键时触发                                                       | `(e: KeyboardEvent) => void`     |
| keyup             | 按键弹起时触发                                                     | `(e: KeyboardEvent) => void`     |
| compositionstart  | 输入法输入开始时触发                                               | `(e: CompositionEvent) => void`  |
| compositionupdate | 输入法输入改变时触发                                               | `(e: CompositionEvent) => void`  |
| compositionend    | 输入法输入完成时触发                                               | `(e: CompositionEvent) => void`  |

### Input Slots

| 插槽名  | 说明                     |
| :------ | :----------------------- |
| prepend | 输入框外部左侧的前置内容 |
| append  | 输入框外部右侧的后置内容 |

### Input Exposes

| 插槽名 | 说明                | 类型         |
| :----- | :------------------ | :----------- |
| focus  | 使 input 获取焦点   | `() => void` |
| select | 选中 input 中的文字 | `() => void` |
| clear  | 清除 input 值       | `() => void` |
