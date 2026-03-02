<template>
  <!-- 根元素 -->
  <div :class="ns.b()">
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-collapse'
})

const props = defineProps({
  accordion: Boolean,
  // 可选值 left/right
  expandIconPosition: { type: String, default: 'right' }
})

const model = defineModel()

const emit = defineEmits(['change'])

import { useNamespace } from '@ui-library/hooks'
import { provide, toRaw, nextTick, toRefs } from 'vue'

const ns = useNamespace('collapse')

// 根据指定的 name，切换激活项
const setActive = (name) => {
  if (props.accordion) {
    // 1. 手风琴模式
    if (model.value === name) {
      model.value = ''
    } else {
      model.value = name
    }
  } else {
    // 2. 普通模式（可以有多项同时被展开）
    const index = model.value.findIndex((item) => item === name)
    if (index === -1) {
      model.value.push(name)
    } else {
      model.value.splice(index, 1)
    }
  }

  // 触发自定义的 change 事件
  nextTick(() => emit('change', toRaw(model.value)))
}

provide('COLLAPSE', { model, setActive, ...toRefs(props) })

defineExpose({
  setActive
})
</script>
