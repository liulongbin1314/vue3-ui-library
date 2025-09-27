<!-- button 按钮组件的 .vue 源代码 -->
<template>
  <button
    :disabled="disabled"
    :class="[ns.b(), ns.m(type), ns.is('round', round), ns.is('disabled', disabled)]"
  >
    <span v-if="$slots.default">
      <!-- 默认插槽 -->
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
defineOptions({
  name: 'a-button'
})

defineProps({
  type: {
    type: String,
    default: 'default'
  },
  round: Boolean,
  disabled: Boolean
})

import { useNamespace } from '@ui-library/hooks'
// 今后在每个组件中，调用 useNamespace 这个 Hook 的时候，
// 必须传入一个块的名字，否则这个 Hook 无法正常工作
const ns = useNamespace('button')

console.log('组件的命名空间是：' + ns.namespace)
console.log('Button 组件的块类名是：' + ns.b('wrap'))
console.log(ns.e('item'))
console.log(ns.m('size', 'small'))
</script>

<style scoped></style>
