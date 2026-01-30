# Checkbox 复选框

在一组备选项中进行多选。

## 单独使用

:::demo 单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的说明文本。另外，说明文本还可以使用 `label` 属性指定。

```html
checkbox/single.vue
```

:::

## 默认勾选

如果没有为复选框指定 `v-model` 双向数据绑定，则可以使用 `checked` 控制单个复选框的默认勾选状态。可以使用 `change` 事件监听选中状态的变化。

:::demo

```html
checkbox/checked.vue
```

:::

## 自定义值

默认情况下，复选框选中状态的值为 `true`，非选中状态的值为 `false`。可使用 `true-value` 和 `false-value` 属性自定义**选中**和**非选中**状态的值。

:::demo

```html
checkbox/custom-value.vue
```

:::

## 复选框组

适用于**多个复选框绑定到同一个数组的情景**。

使用 `<a-checkbox-group>` 组件包裹 `<a-checkbox>` 组件，即可实现分组。分组后的每个复选框组件必须使用 `value` 属性指定选中后的值。

在 `<a-checkbox-group>` 组件上使用 `v-model` 指令实现双向数据绑定，把选中项的值存入指定的数组中。注意：默认选中项可以在数组中直接声明。

:::demo

```html
checkbox/group.vue
```

:::

## 禁用状态

:::demo 使用 `disabled` 属性控制复选框的禁用状态。复选框组支持使用 `disabled` 属性统一设置所有复选框的禁用状态。

```html
checkbox/disabled.vue
```

:::

## 主题颜色

使用 `type` 属性设置复选框的主题颜色，可选值有 `default`、`primary`、`success`、`warning`、`error`，默认值为 `default`。注意：`default` 和 `primary` 的唯一区别是**选中后禁用状态时的背景颜色**。

复选框组支持使用 `type` 属性统一设置所有复选框的主题颜色。

:::demo

```html
checkbox/color.vue
```

:::

## 尺寸

使用 `size` 属性设置复选框的尺寸，可选值有 `small`、`default`、`large`，默认值为 `default`。

复选框组支持使用 `size` 属性统一设置所有复选框的尺寸。

:::demo

```html
checkbox/size.vue
```

:::

## change 事件

单个复选框支持使用绑定 `@change` 事件处理函数， 事件处理函数的签名为 `(value: any) => void`。

:::demo

```html
checkbox/change.vue
```

:::

## beforeChange 异步操作

单个复选框和复选框组都支持使用 `:before-change` 属性指定状态变化时的异步操作，在异步等待期间展示 loading 动画效果。注意：

1. `:before-change` 是**属性**而非事件，因此使用 `:` 表示；
2. `:before-change` 属性的值必须是函数，且返回 Promise 对象，否则无法正常控制 loading 动画的展示和隐藏。

:::demo

```html
checkbox/before-change.vue
```

:::

## 全选复选框

被 `<a-checkbox-all>` 组件包裹的 `<a-checkbox>` 组件用于实现全选的功能。被包裹的 `<a-checkbox>` 组件是可选项：

1. 当所有可选项都被勾选时，全选复选框处于**选中**的状态；
2. 当部分可选项被勾选时，全选复选框处于**部分选中**的状态；
3. 当所有选项都未被勾选时，全选复选框处于**未选中**的状态；

:::demo

```html
checkbox/all.vue
```

:::

通过 `direction` 属性指定全选复选框和可选项的布局方向，默认布局方向为 `vertical`，可使用 `horizontal` 设置为横向布局。
通过 `size` 属性设置尺寸大小，可选值为 `small`、`default` 和 `large`。
通过 `type` 属性设置主题色，可选值为 `default`、`primary`、`success`、`warning`、`error`。
通过 `text` 属性设置全选复选框的描述文本，默认文本为 `全选`。
通过 `disabled` 属性统一控制所有可选项的禁用状态。
通过 `change` 事件监听选中项的改变。

## Checkbox API

### Checkbox 属性

| 属性         | 说明                                                                              | 类型                                                        | 默认值  |
| :----------- | :-------------------------------------------------------------------------------- | :---------------------------------------------------------- | :------ |
| label        | 描述文本                                                                          | `string`                                                    | -       |
| checked      | 是否默认被勾选                                                                    | `boolean`                                                   | false   |
| disabled     | 是否禁用                                                                          | `boolean`                                                   | false   |
| type         | 主题颜色                                                                          | `enum`：`default`、`primary`、`success`、`warning`、`error` | default |
| size         | 尺寸                                                                              | `enum`：`small`、`default`、`large`                         | default |
| trueValue    | 自定义选中后的值                                                                  | `string` 或 `number`                                        | -       |
| falseValue   | 自定义未选中的值                                                                  | `string` 或 `number`                                        | -       |
| value        | 当复选框作为**复选框组**或**全选**的可选项时，必须指定 value 属性，表示选中项的值 | `string`、`boolean` 或 `number`                             | -       |
| beforeChange | 状态变化时需要执行的异步操作，必须是函数，且返回值必须是 Promise 实例             | `function`：`(newValue, oldValue) => Promise`               | -       |

### Checkbox 事件

| 事件   | 说明                                      | 类型                   | 默认值 |
| :----- | :---------------------------------------- | :--------------------- | :----- |
| change | 勾选状态变化时触发，形参 value 是最新的值 | `(value: any) => void` | -      |

## CheckboxGroup API

### CheckboxGroup 属性

| 属性         | 说明                                                                  | 类型                                                        | 默认值  |
| :----------- | :-------------------------------------------------------------------- | :---------------------------------------------------------- | :------ |
| type         | 主题颜色                                                              | `enum`：`default`、`primary`、`success`、`warning`、`error` | default |
| size         | 尺寸                                                                  | `enum`：`small`、`default`、`large`                         | default |
| disabled     | 是否禁用                                                              | `boolean`                                                   | false   |
| beforeChange | 状态变化时需要执行的异步操作，必须是函数，且返回值必须是 Promise 实例 | `function`：`(newValue, oldValue) => Promise`               | -       |

### CheckboxGroup 事件

| 事件   | 说明                                      | 类型                   | 默认值 |
| :----- | :---------------------------------------- | :--------------------- | :----- |
| change | 勾选状态变化时触发，形参 value 是最新的值 | `(value: any) => void` | -      |

## CheckboxAll API

### CheckboxAll 属性

| 属性      | 说明                 | 类型                                                        | 默认值     |
| :-------- | :------------------- | :---------------------------------------------------------- | :--------- |
| type      | 主题颜色             | `enum`：`default`、`primary`、`success`、`warning`、`error` | default    |
| size      | 尺寸                 | `enum`：`small`、`default`、`large`                         | default    |
| disabled  | 是否禁用             | `boolean`                                                   | false      |
| direction | 布局方向             | `enum`：`vertical`、`horizontal`                            | 'vertical' |
| text      | 全选复选框的描述文本 | `string`                                                    | '全选'     |

### CheckboxAll 事件

| 事件   | 说明                                      | 类型                   | 默认值 |
| :----- | :---------------------------------------- | :--------------------- | :----- |
| change | 勾选状态变化时触发，形参 value 是最新的值 | `(value: any) => void` | -      |
