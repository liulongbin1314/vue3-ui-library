# Radio 单选

在一组备选项中进行单选。

## 单独使用

要使用 Radio 组件，只需要设置 `v-moda` 绑定变量， 选中意味着变量的值为相应 Radio `value` 属性的值， value 可以是 `String`、`Number` 或 `Boolean`。

:::tip 温馨提示
单独使用 Radio 组件时，多个 Radio 绑定到同一个 `v-moda` 变量，即可轻松实现选项之间的互斥。

不过，更推荐使用 RadioGroup 组件实现 Radio 选项的互斥，因为不必为每个 Radio 分别绑定相同的 `v-moda` 指令。
:::

:::demo

```html
radio/basis.vue
```

:::

## 禁用状态

`disabled` 属性可以用来控制单选框或单选框组的禁用状态。你只需要为其设置 `disabled` 属性就能控制禁用状态。

:::demo

```html
radio/disabled.vue
```

:::

## 描述文本

通过 `label` 属性设置单选框的描述文本，也可以通过 `a-radio` 组件的默认插槽渲染描述文本。

:::demo

```html
radio/label.vue
```

:::

## 单选框组

适用于在多个互斥的选项中选择的场景。

结合 `a-radio-group` 组件和子组件 `a-radio` 可以实现单选组，为 `a-radio-group` 绑定 `v-model`，再为每一个 `a-radio` 设置好 `value` 属性即可。

另外，还可以通过 `change` 事件来响应变化，它会传入一个参数 `value` 来表示改变之后的值。

:::demo

```html
radio/group.vue
```

:::

## 主题颜色

使用 `type` 属性为 `a-radio` 或 `a-radio-group` 设置主题颜色，可选值：`default`、`primary`、`success`、`warning`、`error`。

:::tip 温馨提示
若同时为 `a-radio-group` 和子组件 `a-radio` 设置了不同的 `type` 主题颜色，按照就近原则，`a-radio` 的 `type` 优先级更高。
:::

:::demo

```html
radio/type.vue
```

:::

## 尺寸

`<a-radio-group>` 和 `<a-radio>` 组件均支持使用 `size` 属性设置单选框的尺寸大小，可选值：`small`、`default`、`large`，默认值为 `default`。

:::demo

```html
radio/size.vue
```

:::

## beforeChange 异步操作

使用 `before-change` 属性指定**选中项改变前的异步操作**。属性值必须是函数，且函数的返回值为 Promise，函数签名为 `(nextValue, currentValue) => Promise`，形参中的 `nextValue` 表示即将变化到的新值，`currentValue` 表示变化前的当前值。

在 Promise 异步操作期间，分组内的所有 Radio 都会被禁用，且被点击的 Radio 组件会持续展示 Loading 动画效果，直至异步操作成功或失败。当异步操作**成功**后，`v-model` 变量会从 `currentValue` **自动更新为** `nextValue`；如果异步操作失败，则 `v-model` 的变量值会**保持为当前的值不变**，不会更新为 `nextValue`，即：**阻止选中项的切换操作**。

在 Promise 异步操作结束后，可通过 `resolve(cb)` 把异步操作**标记为成功**，并指定成功的 `cb` 回调函数，反之，也可以通过 `reject(cb)` 把异步操作**标记为失败**，并指定失败的 `cb` 回调函数。

:::demo

```html
radio/before-change.vue
```

:::

## Radio API

### Radio 属性

| 属性         | 说明                                                                                                                                                                                                     | 类型                                              | 默认值  |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------ | :------ |
| type         | 主题颜色                                                                                                                                                                                                 | `enum`：default、primary、success、warning、error | default |
| size         | 尺寸                                                                                                                                                                                                     | `enum`：small、default、large                     | default |
| disabled     | 是否禁用                                                                                                                                                                                                 | `boolean`                                         | false   |
| label        | 描述文本                                                                                                                                                                                                 | `string`                                          | -       |
| value        | 选中项的值                                                                                                                                                                                               | `string`、`number`、`boolean`                     | -       |
| beforeChange | 状态切换前要执行的异步操作，必须是函数，且返回 Promise 实例。<br/> 可通过 `resolve(cb)` 和 `reject(cb)` 指定成功和失败的回调操作。<br/> 当异步操作失败后，会阻止开关状态的切换，强制开关停留在当前状态。 | `(nextValue, currentValue) => Promise`            | -       |

### Radio 事件

| 事件   | 说明                                        | 类型                   | 默认值 |
| :----- | :------------------------------------------ | :--------------------- | :----- |
| change | 选中项变化时触发，形参 value 是最新的状态值 | `(value: any) => void` | -      |

## RadioGroup API

### RadioGroup 属性

| 属性         | 说明                                                                                                                                                                                                     | 类型                                              | 默认值  |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------ | :------ |
| type         | 主题颜色                                                                                                                                                                                                 | `enum`：default、primary、success、warning、error | default |
| size         | 尺寸                                                                                                                                                                                                     | `enum`：small、default、large                     | default |
| disabled     | 是否禁用                                                                                                                                                                                                 | `boolean`                                         | false   |
| beforeChange | 状态切换前要执行的异步操作，必须是函数，且返回 Promise 实例。<br/> 可通过 `resolve(cb)` 和 `reject(cb)` 指定成功和失败的回调操作。<br/> 当异步操作失败后，会阻止开关状态的切换，强制开关停留在当前状态。 | `(nextValue, currentValue) => Promise`            | -       |

### RadioGroup 事件

| 事件   | 说明                                        | 类型                   | 默认值 |
| :----- | :------------------------------------------ | :--------------------- | :----- |
| change | 选中项变化时触发，形参 value 是最新的状态值 | `(value: any) => void` | -      |
