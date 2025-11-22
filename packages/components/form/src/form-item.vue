<template>
  <!-- 根元素 -->
  <div :class="[ns.b()]">
    <!-- 左侧 label 的容器 -->
    <div :class="[ns.e('label-wrapper')]" :style="[styledWidth]" v-if="label">
      <label for="" :class="[ns.e('label')]">{{ label }}</label>
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

defineProps({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: 100
  }
})

import { useNamespace } from '@ui-library/hooks'
import { useFormItem } from './composables'

const ns = useNamespace('form-item')

const { styledWidth } = useFormItem()
</script>

<style scoped></style>
