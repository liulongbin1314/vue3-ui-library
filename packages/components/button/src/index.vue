<!-- button 按钮组件的 .vue 源代码 -->
<template>
  <button
    :disabled="disabled || loading"
    :class="[
      ns.b(),
      ns.m(type),
      ns.is('round', round),
      ns.is('disabled', disabled),
      ns.is('text', text),
      ns.is('link', link),
      ns.is('border', border),
      ns.is('dashed', dashed),
      ns.is('block', block),
      ns.m('size', size),
      ns.is('circle', circle),
      ns.is('loading', loading)
    ]"
  >
    <span v-if="$slots.default" :class="ns.e('inner')">
      <!-- loading 的 icon 图标 -->
      <span
        v-if="loading"
        class="iconfont icon-loading"
        :class="ns.is('loading-animate', loading)"
      ></span>
      <!-- 前置 icon 图标 -->
      <span v-if="icon" class="iconfont" :class="icon"></span>
      <!-- 默认插槽 -->
      <slot></slot>
      <!-- 后置 icon 图标 -->
      <span v-if="suffixIcon" class="iconfont" :class="suffixIcon"></span>
    </span>

    <!-- 圆形按钮的 icon 图标 -->
    <!-- 圆形按钮的图标，必须保证 circle 属性为 true 且 传入了 icon 属性值 -->
    <span v-if="circle && icon" class="iconfont" :class="icon"></span>
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
  disabled: Boolean,
  text: Boolean,
  link: Boolean,
  border: Boolean,
  dashed: Boolean,
  block: Boolean,
  size: {
    type: String,
    default: 'default'
  },
  circle: Boolean,
  // 是普通按钮的前置图标、圆形按钮的图标
  icon: String,
  // 是普通按钮的后置图标
  suffixIcon: String,
  loading: Boolean
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
