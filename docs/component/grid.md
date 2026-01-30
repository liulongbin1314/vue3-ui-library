# Grid 栅格

通过基础的 24 分栏，迅速简便地创建布局。

:::tip 温馨提示
组件默认使用 Flex 布局，不需要手动设置 `type="flex"`。

列的基本单位为1，最多24个，最少0个。
:::

## 基础用法

使用列创建基础网格布局。

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。
:::demo

```html
grid/basis.vue
```

:::

## 分栏间隔

支持列间距。

行提供 `gutter` 属性来指定列之间的间距，其默认值为0。
:::demo

```html
grid/gutter.vue
```

:::

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
:::demo

```html
grid/hybrid-layout.vue
```

:::

## 换行间距

通过制定 `row` 组件的 `gap` 属性可以指定一行内的 `col` 组件过多、总列数超出 24 导致换行时，上一行与下一行的间距。
:::demo

```html
grid/gap.vue
```

:::

## 列偏移

您可以指定列偏移量。

通过制定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。
:::demo

```html
grid/offset.vue
```

:::

## 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过 `justify` 属性来定义子元素的排版方式，其取值为 `start`、`center`、`end`、`space-between`、`space-around` 或 `space-evenly`。
:::demo

```html
grid/justify.vue
```

:::

## Row API

### Row 属性

| 属性    | 说明                                             | 类型                                                                                | 默认值 |
| :------ | :----------------------------------------------- | :---------------------------------------------------------------------------------- | :----- |
| tag     | 自定义元素标签                                   | `string`                                                                            | div    |
| gutter  | 栅格间隔                                         | `number`                                                                            | 0      |
| gap     | 换行间距。当栅格自动换行时，上一行与下一行的间隔 | `number`                                                                            | 0      |
| justify | flex 布局下的水平排列方式                        | `enum`：`start`、`center`、`end`、`space-between`、`space-around` 或 `space-evenly` | -      |

### Row 插槽

| 属性    | 说明           | 类型 |
| :------ | :------------- | :--- |
| default | 自定义默认内容 | Col  |

## Col API

### Col 属性

| 属性   | 说明               | 类型     | 默认值 |
| :----- | :----------------- | :------- | :----- |
| tag    | 自定义元素标签     | `string` | div    |
| span   | 栅格占据的列数     | `number` | 24     |
| offset | 栅格左侧的间隔格数 | `number` | 0      |

### Col 插槽

| 属性    | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |
