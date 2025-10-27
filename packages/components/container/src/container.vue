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
    default: 'horizontal'
  }
})

import { useNamespace } from '@ui-library/hooks'
import { computed } from 'vue'
const ns = useNamespace('container')

const isVertical = computed(() => {
  return direction === 'vertical'
})
</script>
