# Form 表单

表单包含 `input`、`radio`、`switch`、`checkbox` 等需要用户输入的组件。 使用表单，您可以收集、验证和提交数据。

## 典型表单

最基础的表单包括各种输入表单项，比如 `input`、`radio`、`switch`、`checkbox` 等。

在每一个 `form` 组件中，你需要一个 `form-item` 字段作为输入项的容器，用于**获取值**与**验证值**。

:::tip 温馨提示

1. `<a-form>` 组件可使用 `width` 属性设置整个表单的宽度；
2. `<a-form>` 组件可使用 `label-width` 属性统一设置表单项左侧 label 的宽度；
   :::

:::demo

```html
form/basis.vue
```

:::

## 对齐方式

您可以分别设置 `a-form-item` 的 `label-position`，如果值为空, 则会使用 `a-form` 的 `label-position`。

通过设置 `label-position` 属性可以改变表单项标签的位置，可选值为 `left`、`right` 和 `top`, 当设为 `top` 时标签会置于表单域的顶部，默认值为 `right`。

:::demo

```html
form/label-position.vue
```

:::

## 尺寸控制

表单中的所有子组件都继承了该表单的 `size` 属性。 同样，`form-item` 也有一个 `size` 属性。

如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的 `size` 属性，直接为这个表单项或表单组件设置自己的 size 属性即可。
:::demo

```html
form/size.vue
```

:::

## 表单校验

Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

Form 组件提供了表单验证的功能，只需为 `rules` 属性传入约定的验证规则，并将 `form-item` 的 `prop` 属性设置为需要验证的特殊键值即可。 校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)。

::: tip 校验表单的4个步骤：

1. 定义表单的数据源对象，绑定为 `<a-form>` 组件的 `:model` 属性，使用 `v-model` 指令为每一个表单元素绑定具体的数据源；
2. 定义表单校验规则对象，绑定为 `<a-form>` 组件的 `:rules` 属性，并为每个 `<a-form-item>` 组件提供 `prop` 属性，指定具体的校验规则；
3. 定义表单的 ref 引用对象，绑定为 `<a-form>` 组件的 `ref` 属性；
4. 调用表单 ref 引用对象的 `validate()` 函数或 `validateFields()` 函数，实现表单的**整体校验**或**仅校验指定的字段**。
   :::

:::demo

```html
form/validate.vue
```

:::

## Form API

### Form Attributes

| 属性          | 说明                                                                        | 类型                          | 默认值  |
| :------------ | :-------------------------------------------------------------------------- | :---------------------------- | :------ |
| model         | 表单数据对象                                                                | `object`                      | -       |
| rules         | 表单验证规则                                                                | `object`                      | -       |
| width         | 表单的整体宽度                                                              | `string` 或 `number`          | -       |
| size          | 用于控制该表单内组件的尺寸                                                  | `enum`：small、default、large | default |
| labelWidth    | 标签的长度，例如 '120px'。 作为 Form 直接子元素的 form-item 会继承该值      | `string` 或 `number`          | 100px   |
| labelPosition | 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性 | `enum`：left、right、top      | right   |

### Form Slots

| 插槽名  | 说明           | 子标签   |
| :------ | :------------- | :------- |
| default | 自定义默认内容 | FormItem |

### Form Exposes

| 名称           | 说明                                                        | 类型                                                     |
| :------------- | :---------------------------------------------------------- | :------------------------------------------------------- |
| validate       | 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise | `(callback?: (valid, errors) => void) => Promise`        |
| validateFields | 验证具体的某写字段。接收一个回调函数，或返回 Promise        | `(array, callback?: (valid, errors) => void) => Promise` |
| reset          | 重置表单为初始状态                                          | `() => void`                                             |

## FormItem API

### FormItem Attributes

| 属性          | 说明                                                                                                          | 类型                     | 默认值 |
| :------------ | :------------------------------------------------------------------------------------------------------------ | :----------------------- | :----- |
| prop          | model 的键名，在使用了 validate、resetFields 的方法时，该属性是必填的。                                       | `string`                 | -      |
| rules         | 表单验证规则, 具体配置见下表, 更多内容可以参考 [async-validator](https://github.com/yiminghe/async-validator) | `object`                 | -      |
| label         | 标签文本                                                                                                      | `string`                 | -      |
| labelWidth    | 标签宽度，例如 '50px'                                                                                         | `string`、`number`       | -      |
| labelPosition | 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性                                   | `enum`：left、right、top | -      |

### FormItemRule

| 属性    | 说明               | 类型                   | 默认值 |
| :------ | :----------------- | :--------------------- | :----- |
| trigger | 验证逻辑的触发方式 | `enum`: blur 或 change | -      |

### FormItem Slots

| 插槽名  | 说明       | 类型 |
| :------ | :--------- | :--- |
| default | 表单的内容 | -    |
