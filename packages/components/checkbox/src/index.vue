<template>
  <!-- 根元素 -->
  <component
    :is="tag"
    :class="[
      ns.b(),
      ns.is('checked', isChecked),
      ns.is('disabled', isDisabled),
      ns.m(type),
      ns.m('size', cbSize)
    ]"
  >
    <!-- 复选框容器 -->
    <span :class="[ns.e('wrapper')]">
      <!-- 真实的复选框 -->
      <input type="checkbox" :disabled="isDisabled" :class="[ns.e('input')]" />
      <!-- 模拟出来的复选框 -->
      <span :class="[ns.e('inner')]">
        <a-icon :icon="Check" :class="[ns.e('icon-check')]"></a-icon>
      </span>
    </span>
    <!-- label 描述文本 -->
    <span :class="[ns.e('label')]">
      <slot>{{ label }}</slot>
    </span>
  </component>
</template>

<script setup>
defineOptions({
  name: 'a-checkbox'
})

const props = defineProps({
  tag: {
    type: String,
    default: 'label'
  },
  label: String,
  checked: Boolean,
  disabled: Boolean,
  type: String,
  size: {
    type: String,
    default: 'default'
  }
})

import { useNamespace } from '@ui-library/hooks'
import { AIcon } from '@ui-library/components'
import { Check } from '@ui-library/icons'
import { useCheckbox } from './composables'

const ns = useNamespace('checkbox')
const { cbSize, isDisabled, isChecked } = useCheckbox()
</script>
