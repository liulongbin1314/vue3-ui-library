<!-- button 按钮组件的 .vue 源代码 -->
<template>
  <button
    :disabled="disabled || loading || _loading"
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
      ns.m('size', _size),
      ns.is('circle', circle),
      ns.is('loading', loading || _loading),
      ns.is('button-group', _isGroup)
    ]"
    @click="clickHandler"
  >
    <span v-if="$slots.default" :class="ns.e('inner')">
      <!-- loading 的 icon 图标 -->
      <span
        v-if="loading || _loading"
        class="iconfont icon-loading"
        :class="ns.is('loading-animate', loading || _loading)"
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

const props = defineProps({
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
  size: String,
  circle: Boolean,
  // 是普通按钮的前置图标、圆形按钮的图标
  icon: String,
  // 是普通按钮的后置图标
  suffixIcon: String,
  loading: Boolean,
  beforeChange: Function
})

import { useNamespace } from '@ui-library/hooks'
import { ref, inject, computed } from 'vue'
import { useFormItem } from '@ui-library/components/form/src/composables'
// 今后在每个组件中，调用 useNamespace 这个 Hook 的时候，
// 必须传入一个块的名字，否则这个 Hook 无法正常工作
const ns = useNamespace('button')
const { formProps } = useFormItem()
// 内部的 loading 状态
const _loading = ref(false)
// 接收父组件传入的 isGroup 数据，来判断当前按钮是否属于按钮组
const _isGroup = inject('isGroup', false)
// 接收父组件向下传入的数据
const _groupSize = inject('groupSize', undefined)
// _size 是计算出来的最终的 size 尺寸
// const _size = props.size === 'default' ? _groupSize : props.size
const _size = computed(() => props.size || _groupSize || formProps?.size.value || 'default')

// console.log('组件的命名空间是：' + ns.namespace)
// console.log('Button 组件的块类名是：' + ns.b('wrap'))
// console.log(ns.e('item'))
// console.log(ns.m('size', 'small'))

const clickHandler = () => {
  const isFn = typeof props.beforeChange === 'function'
  if (isFn) {
    // 说明 props.beforeChange 是一个函数
    const fnResult = props.beforeChange()
    if (fnResult instanceof Promise) {
      // 展示 loading 状态
      _loading.value = true
      fnResult.finally(() => {
        // 隐藏 loading 状态
        _loading.value = false
      })
    }
  } else {
    // 说明 props.beforeChange 不是函数
  }
}
</script>

<style scoped></style>
