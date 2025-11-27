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
const validate = (cb) => {
  console.log('触发了 Form 组件的 validate 函数！')
  console.log(modelFields)
}

defineExpose({
  validate
})
</script>

<style scoped></style>
