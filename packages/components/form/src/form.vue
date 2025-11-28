<template>
  <div :class="[ns.b()]" :style="[styledWidth]">
    <!-- 表单项 -->
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-form'
})

const props = defineProps({
  labelPosition: {
    type: String,
    // left / right / top
    default: 'right'
  },
  width: [String, Number],
  labelWidth: {
    type: [String, Number],
    default: 100
  },
  // 表单的数据源
  model: {
    type: Object,
    default: () => ({})
  },
  rules: {
    type: Object,
    default: () => ({})
  },
  size: {
    type: String,
    default: 'default'
  }
})

import { useNamespace, useStyle } from '@ui-library/hooks'
import { provide, toRefs, computed } from 'vue'
import { FORM_PROPS } from '../constant'

const ns = useNamespace('form')
const uStyle = useStyle()
const styledWidth = computed(() => uStyle.width(props.width))
// 用于存储每一个 FormItem 中的校验信息，
// 将来在 modelFields 数组中，存储的是 { prop: 字段的名字, validate: 校验函数 }
const modelFields = []
const pushField = (ctx) => modelFields.push(ctx)

provide(FORM_PROPS, { ...toRefs(props), pushField })

// 此函数，用于对整个表单中的数据进行合法性校验
const _validate = async (fields, cb) => {
  console.log('触发了 Form 组件的 validate 函数！')

  const fieldsError = []
  for (const item of fields) {
    try {
      await item.validate()
    } catch (err) {
      fieldsError.push(err)
    }
  }

  if (cb && typeof cb === 'function') {
    cb(fieldsError.length === 0, fieldsError)
  } else {
    if (fieldsError.length === 0) return Promise.resolve(props.model)
    return Promise.reject(fieldsError)
  }
}

// 校验指定的字段，其中，形参中的 fields 是一个字段名字的数组，例如：
// ['name', 'phone']
const validateFields = (fields, cb) => {
  if (!Array.isArray(fields)) return _validate(modelFields, cb)
  const arr = modelFields.filter((item) => fields.includes(item.prop))
  return _validate(arr, cb)
}

const reset = (fields) => {
  if (Array.isArray(fields)) {
    // 重置指定的表单项
    const arr = modelFields.filter((item) => fields.includes(item.prop))
    arr.forEach((item) => item.resetField())
  } else {
    // 重置所有表单项
    modelFields.forEach((item) => item.resetField())
  }
}

defineExpose({
  validate: (cb) => _validate(modelFields, cb),
  validateFields,
  reset
})
</script>

<style scoped></style>
