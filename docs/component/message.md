# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

调用 `AMessage(options)` 函数展示消息提示，使用 `content` 属性设置消息内容。

消息组件在顶部显示并在 3 秒后自动消失，鼠标覆盖到消息组件上时，会暂停自动关闭的行为，鼠标离开后重新计时。
:::demo

```html
message/basis.vue
```

:::

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

通过 `type` 属性指定消息的类型，可选值：primary、success、warning、info、error，默认值为 info。

:::demo

```html
message/type.vue
```

:::

## 便捷方法

我们为 `AMessage` 组件注册了 `AMessage.success(string)` 等一系列的便捷方法，方便用户展示不同类型的消息：

- `AMessage.primary(string)`
- `AMessage.success(string)`
- `AMessage.warning(string)`
- `AMessage.info(string)`
- `AMessage.error(string)`

:::demo

```html
message/function.vue
```

:::

## 展示时长

消息组件默认展示 3000ms，可使用 `duration` 属性自定义展示的时长，单位：`ms` 毫秒。

:::demo

```html
message/duration.vue
```

:::

## 消息背景颜色

将 `background` 属性设置为 `true`，即可根据 `type` 类型渲染对应背景颜色的消息组件。
:::demo

```html
message/background.vue
```

:::

## 关闭所有

调用 `AMessage.closeAll()` 方法，即可一键关闭所有的 Message 消息。
:::demo

```html
message/close-all.vue
```

:::

## Message API

### Message 配置项

| 属性       | 说明                             | 类型                                           | 默认值 |
| :--------- | :------------------------------- | :--------------------------------------------- | :----- |
| type       | 消息类型，用于展示不同的主题颜色 | `enum`：primary、success、warning、info、error | info   |
| content    | 消息内容                         | `string`                                       | -      |
| duration   | 消息展示时长，单位 `ms` 毫秒     | `number`                                       | 3000   |
| background | 是否展示深色的背景和白色的文字   | `boolean`                                      | false  |

### Message 方法

| 名称     | 描述                     | 类型       |
| :------- | :----------------------- | :--------- |
| closeAll | 关闭页面上所有的消息组件 | () => void |
