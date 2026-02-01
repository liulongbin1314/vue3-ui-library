# Textarea 文本域

通过键盘输入多行文本信息。

## 基础用法

`<a-textarea>` 文本域组件可使用 `v-model` 指令进行数据的双向绑定，`placeholder` 属性用于设置占位符文本。
:::demo

```html
textarea/basis.vue
```

:::

## 禁用状态

通过 `disabled` 属性指定是否禁用文本域组件。
:::demo

```html
textarea/disabled.vue
```

:::

## 宽度

通过 `width` 属性指定文本域组件的宽度。
:::demo

```html
textarea/width.vue
```

:::

## 最大输入长度

使用 `max-length` 属性设置文本域的最大输入长度。
:::demo

```html
textarea/max-length.vue
```

:::

## 字数统计

使用 `count` 属性统计文本域中的字符个数，文本超限后会显示为红色。

:::tip 温馨提示

1. `count` 属性必须配合 `max-length` 属性才能生效！
2. 文本域高度可通过 `rows` 属性控制。
   :::

:::demo

```html
textarea/count.vue
```

:::

## Textarea API

### Textarea Attributes

| 属性        | 说明                                                | 类型                 | 默认值 |
| :---------- | :-------------------------------------------------- | :------------------- | :----- |
| disabled    | 是否禁用                                            | `boolean`            | false  |
| placeholder | 文本占位符                                          | `string`             | -      |
| width       | 文本域宽度                                          | `string`             | -      |
| maxLength   | 最大输入长度                                        | `string` 或 `number` | -      |
| count       | 是否进行字数统计，必须配合 `maxLength` 属性一起使用 | `boolean`            | false  |
| rows        | 文本域的高度                                        | `string` 或 `number` | -      |

### Textarea Events

| 事件名            | 说明                                                               | 类型                             |
| :---------------- | :----------------------------------------------------------------- | :------------------------------- |
| input             | 在 Textarea 值改变时触发                                           | `(value, e: InputEvent) => void` |
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

### Textarea Exposes

| 插槽名 | 说明                   | 类型         |
| :----- | :--------------------- | :----------- |
| focus  | 使 textarea 获取焦点   | `() => void` |
| select | 选中 textarea 中的文字 | `() => void` |
| clear  | 清除 textarea 值       | `() => void` |
