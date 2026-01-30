# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<a-container>`：外层容器。 当子元素中包含 `<a-header>` 或 `<a-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<a-header>`：顶栏容器。

`<a-aside>`：侧边栏容器。

`<a-main>`：主要区域容器。

`<a-footer>`：底栏容器。

:::tip 温馨提示
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。后四个组件的父元素必须是一个 `<el-container>`。
:::

## 常见页面布局

:::demo **上-下**布局：

```html
container/up-mid.vue
```

:::

:::demo **左/中/右**布局：

```html
container/left-mid-right.vue
```

:::
<b>上-下[左/右]</b>布局：
:::demo

```html
container/up-down_left_right.vue
```

:::
<b>上-下[左/右(上-下)]</b>布局：
:::demo

```html
container/up-down_left_right--up--down.vue
```

:::

<b>左-右[上/下]</b>布局：
:::demo

```html
container/left-right_up_down.vue
```

:::

<b>左-右[上/中/下]</b>布局：
:::demo

```html
container/left-right_up_mid_down.vue
```

:::

## Container API

### Container 属性

| 属性      | 说明             | 类型                             | 默认值     |
| :-------- | :--------------- | :------------------------------- | :--------- |
| direction | 子元素的排列方向 | `enum`: `horizontal`、`vertical` | horizontal |

### Container 插槽

| 属性    | 说明           | 子标签                                     |
| :------ | :------------- | :----------------------------------------- |
| default | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header API

### Header 属性

| 属性   | 说明     | 类型     | 默认值 |
| :----- | :------- | :------- | :----- |
| height | 顶栏高度 | `string` | 60px   |

### Header 插槽

| 属性    | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |

## Aside API

### Aside 属性

| 属性  | 说明       | 类型     | 默认值 |
| :---- | :--------- | :------- | :----- |
| width | 侧边栏宽度 | `string` | 300px  |

### Aside 插槽

| 属性    | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |

## Main API

### Main 插槽

| 属性    | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |

## Footer API

### Footer 属性

| 属性   | 说明     | 类型     | 默认值 |
| :----- | :------- | :------- | :----- |
| height | 底栏高度 | `string` | 60px   |

### Footer 插槽

| 属性    | 说明           |
| :------ | :------------- |
| default | 自定义默认内容 |
