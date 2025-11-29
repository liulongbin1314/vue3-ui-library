<template>
  <!-- 根元素 -->
  <div
    :class="[
      ns.b(),
      ns.is('label-top', labelAlign === 'top'),
      ns.is('required', isRequired),
      ns.m('size', size)
    ]"
  >
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
      <transition name="a-error-fade">
        <div :class="[ns.e('message')]" v-if="isInvalid">{{ errorMessage }}</div>
      </transition>
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
import { provide, onMounted } from 'vue'
import { FORM_ITEM_PROPS } from '../constant'
import Schema from 'async-validator'

const ns = useNamespace('form-item')

const {
  styledWidth,
  styledTextAlign,
  labelAlign,
  labelId,
  filterRules,
  formProps,
  errorMessage,
  isInvalid,
  isRequired,
  size
} = useFormItem()

// console.log(`key 是：${props.prop}，Value 是：${formProps?.model.value[props.prop]}`)

// 把此函数，通过 provide 向下提供
// 在子组件中，可以调用此函数，对自身的数据进行校验
// 形参中的 trigger 是触发校验的时机
// blur change
const validate = async (trigger) => {
  // 1. 准备校验规则
  const rules = filterRules(trigger)
  const validateRules = { [props.prop]: rules }
  // 2. 准备要校验的数据
  const data = formProps?.model.value[props.prop]
  const validateData = { [props.prop]: data }
  // 3. 创建校验器
  const validator = new Schema(validateRules)
  // 4. 执行校验
  const asyncResult = validator.validate(validateData, { firstFields: true })
  return asyncResult.then(successHandler).catch(failedHandler)
}

const successHandler = () => {
  console.log('校验通过！')
  errorMessage.value = ''
  return Promise.resolve()
}

const failedHandler = ({ errors }) => {
  console.log('校验失败！')
  console.log(errors)
  errorMessage.value = errors?.[0].message
  return Promise.reject(errors)
}

provide(FORM_ITEM_PROPS, { labelId, validate, isInvalid })

// 存储当前表单项的初始值
let initValue = null
// 重置当前表单项的值和校验的结果
const resetField = () => {
  if (props.prop && formProps) {
    // 给当前表单项重置为初始值
    formProps.model.value[props.prop] = initValue
    // 重置错误消息
    setTimeout(() => (errorMessage.value = ''))
  }
}

// { prop: 字段的名字, validate: 校验函数 }
onMounted(() => props.prop && formProps?.pushField({ prop: props.prop, validate, resetField }))
onMounted(() => {
  if (props.prop) {
    initValue = formProps?.model.value[props.prop]
  }
})
</script>

<style scoped></style>
