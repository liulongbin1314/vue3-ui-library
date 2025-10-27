<template>
  <section :class="[ns.b(), ns.is('vertical', isVertical)]">
    <slot></slot>
  </section>
</template>

<script setup>
defineOptions({
  name: 'a-container'
})

const { direction } = defineProps({
  direction: {
    type: String,
    // 默认情况下，让子元素在横向上进行排列
    // horizontal 横向排列
    // vertical 纵向排列
    default: ''
  }
})

import { useNamespace } from '@ui-library/hooks'
import { computed, useSlots } from 'vue'
const ns = useNamespace('container')
const slots = useSlots()

const isVertical = computed(() => {
  // return direction === 'vertical'
  if (direction === 'vertical') return true
  if (direction === 'horizontal') return false

  const result = slots
    .default()
    .some((item) => item.type.name === 'a-header' || item.type.name === 'a-footer')
  return result
})
</script>
