<template>
  <!-- 根元素 -->
  <div :class="[ns.b(), ns.is('label-top', labelAlign === 'top')]">
    <!-- 左侧 label 的容器 -->
    <div :class="[ns.e('label-wrapper')]" :style="[styledWidth, styledTextAlign]" v-if="label">
      <label :for="labelId" :class="[ns.e('label')]">{{ label }}</label>
    </div>

    <!-- 右侧 控件 的容器 -->
    <div :class="[ns.e('control')]">
      <!-- 内层表单项的容器 -->
      <div :class="[ns.e('control-inner')]">
        <slot></slot>
      </div>
      <!-- 错误消息 -->
      <div :class="[ns.e('message')]">错误消息</div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-form-item'
})

const props = defineProps({
  label: String,
  labelWidth: [String, Number],
  labelPosition: String,
  // prop 有两层含义：
  // 1. 数据的名字
  // 2. 校验规则的名字
  prop: String,
  rules: {
    type: [Object, Array],
    default: () => []
  }
})

import { useNamespace } from '@ui-library/hooks'
import { useFormItem } from './composables'
import { provide } from 'vue'
import { FORM_ITEM_PROPS } from '../constant'

const ns = useNamespace('form-item')

const { styledWidth, styledTextAlign, labelAlign, labelId, filterRules } = useFormItem()

// console.log(`key 是：${props.prop}，Value 是：${formProps?.model.value[props.prop]}`)

// 把此函数，通过 provide 向下提供
// 在子组件中，可以调用此函数，对自身的数据进行校验
// 形参中的 trigger 是触发校验的时机
// blur change
const validate = (trigger) => {
  const rules = filterRules(trigger)
  console.log(rules)
}

provide(FORM_ITEM_PROPS, { labelId, validate })
</script>

<style scoped></style>
