<template>
  <component :is="tag" :class="[ns.b(), spanClass, offsetClass]" :style="[styledGutter]">
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
  },
  offset: {
    type: Number,
    default: 0
  }
})

import { useNamespace } from '@ui-library/hooks'
import { computed, inject } from 'vue'

const ns = useNamespace('col')
const gutter = inject('gutter', 0)

const spanClass = computed(() => {
  return props.span ? `${ns.namespace}-col-${props.span}` : ''
})

const styledGutter = computed(() => {
  if (!gutter) return {}
  const gutterVal = gutter / 2 + 'px'
  return { paddingLeft: gutterVal, paddingRight: gutterVal }
})

const offsetClass = computed(() => {
  if (!props.offset) return ''
  return 'a-col-offset-' + props.offset
})
</script>

<style scoped></style>
