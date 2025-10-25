<template>
  <component :is="tag" :class="[ns.b(), spanClass]">
    <slot></slot>
  </component>
</template>

<script setup>
defineOptions({
  name: 'a-col'
})

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  span: {
    type: Number,
    default: 0
  }
})

import { useNamespace } from '@ui-library/hooks'
import { computed } from 'vue'

const ns = useNamespace('col')

const spanClass = computed(() => {
  return props.span ? `${ns.namespace}-col-${props.span}` : ''
})
</script>

<style scoped></style>
