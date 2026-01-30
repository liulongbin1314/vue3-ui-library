# Switch 开关

表示两种互相对立的状态的切换，多用于触发[开/关]效果。

## 基础用法

:::demo 绑定 `v-model` 到一个布尔值，即可控制开关的打开和关闭状态。

```html
switch/basis.vue
```

:::

## 尺寸

:::demo 使用 `size` 属性设置开关的尺寸，可选值为 `small`、`default` 和 `large`。

```html
switch/size.vue
```

:::

## 主题颜色

使用 `type` 属性设置开关的主题颜色，可选值为 `default`、`primary`、`success`、`warning`、`error`，默认值为 `default`。

注意：`default` 和 `primary` 的唯一区别是**禁用状态时的颜色不同**。

:::demo

```html
switch/type.vue
```

:::

## 禁用状态

:::demo 使用 `disabled` 属性设置开关的禁用状态。当开关处于打开状态、且禁用时，`type="default"` 的背景是灰色，而 `type="primary"` 的背景是蓝色。

```html
switch/disabled.vue
```

:::

## 自定义文字

使用 `active-text` 属性设置开关打开时要渲染的文字，使用 `inactive-text` 属性设置开关关闭时要渲染的文字。

:::demo

```html
switch/text.vue
```

:::

## 自定义图标

使用 `active-icon` 属性设置打开状态下的图标，使用 `inactive-icon` 属性设置关闭状态下的图标，支持设置**字体图标**和 **svg 图标**。

使用 `center-icon` 属性可以把图标渲染为**中心图标**，此时开关的**图标和文字均可展示**，否则仅展示图标，不展示文字。

:::demo

```html
switch/icon.vue
```

:::

## 动画效果

:::demo 使用 `transition` 属性设置开关状态切换时的**文字**或**图标**的动画效果，可选值为 `scale` **缩放动画**和 `slide` **滑动动画**。默认值为 `scale`，即缩放动画

```html
switch/transition.vue
```

:::

## 自定义 value 值

默认情况下，打开状态的值为 `true`，关闭状态的值为 `false`，可使用 `active-value` 属性设置打开状态的值，使用 `inactive-value` 属性设置关闭状态的值。属性值的类型可为 `string`、`number`、`boolean`。

:::demo

```html
switch/value.vue
```

:::

## beforeChange 异步操作

使用 `before-change` 属性指定**状态切换前的异步操作**。属性值必须是函数，且函数的返回值为 Promise，函数签名为 `(nextValue, currentValue) => Promise`，形参中的 `nextValue` 表示即将变化到的新值，`currentValue` 表示变化前的当前值。

在 Promise 异步操作期间，开关组件会以中心圆的形式持续展示 Loading 动画效果，直至异步操作成功或失败。当异步操作**成功**后，开关组件的值会从 `currentValue` **自动更新为** `nextValue`；如果异步操作失败，则开关的值会**保持为当前的值不变**，不会更新为 `nextValue`，即：**阻止开关状态的切换**。

在 Promise 异步操作结束后，可通过 `resolve(cb)` 把异步操作**标记为成功**，并指定成功的 `cb` 回调函数，反之，也可以通过 `reject(cb)` 把异步操作**标记为失败**，并指定失败的 `cb` 回调函数。

:::demo

```html
switch/before-change.vue
```

:::

## change 事件

使用 `change` 事件监听开关状态的切换，事件签名为 `(value: any) => void`，形参中的 `value` 是变化后的新值。

:::demo

```html
switch/change.vue
```

:::

## Switch API

### Switch 属性

| 属性          | 说明                                                                                                                                                                                                     | 类型                                              | 默认值  |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------ | :------ |
| type          | 主题颜色                                                                                                                                                                                                 | `enum`：default、primary、success、warning、error | default |
| size          | 尺寸                                                                                                                                                                                                     | `enum`：small、default、large                     | default |
| transition    | 状态切换时的动画效果                                                                                                                                                                                     | `enum`：scale、slide                              | scale   |
| disabled      | 是否禁用                                                                                                                                                                                                 | `boolean`                                         | false   |
| activeText    | 打开时显示的文字                                                                                                                                                                                         | `string`                                          | -       |
| inactiveText  | 关闭时显示的文字                                                                                                                                                                                         | `string`                                          | -       |
| activeIcon    | 打开时显示的图标                                                                                                                                                                                         | `string` 字体图标类名、svg 图标组件               | -       |
| inactiveIcon  | 关闭时显示的图标                                                                                                                                                                                         | `string` 字体图标类名、svg 图标组件               | -       |
| centerIcon    | 是否在中心圆上展示打开和关闭时的图标                                                                                                                                                                     | `boolean`                                         | false   |
| activeValue   | 自定义打开时的值                                                                                                                                                                                         | `string`、`number`、`boolean`                     | -       |
| inactiveValue | 自定义关闭时的值                                                                                                                                                                                         | `string`、`number`、`boolean`                     | -       |
| beforeChange  | 状态切换前要执行的异步操作，必须是函数，且返回 Promise 实例。<br/> 可通过 `resolve(cb)` 和 `reject(cb)` 指定成功和失败的回调操作。<br/> 当异步操作失败后，会阻止开关状态的切换，强制开关停留在当前状态。 | `(nextValue, currentValue) => Promise`            | -       |

### Switch 事件

| 事件   | 说明                                          | 类型                   | 默认值 |
| :----- | :-------------------------------------------- | :--------------------- | :----- |
| change | 开关状态变化时触发，形参 value 是最新的状态值 | `(value: any) => void` | -      |
