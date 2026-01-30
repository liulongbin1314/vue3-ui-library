<template>
  <component
    :is="tag"
    :class="[ns.b(), ns.is('justify-' + justify, !!justify)]"
    :style="[styledMargin, styledRowGap]"
  >
    <slot></slot>
  </component>
</template>

<script setup>
defineOptions({
  name: 'a-row'
})

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  gutter: {
    type: Number,
    default: 0
  },
  gap: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    default: ''
  }
})

import { useNamespace } from '@ui-library/hooks'
import { provide, computed, toRefs } from 'vue'

const ns = useNamespace('row')
provide('rowProps', toRefs(props))

const styledMargin = computed(() => {
  if (!props.gutter) return {}
  const halfGutter = (props.gutter / 2) * -1 + 'px'
  return { marginLeft: halfGutter, marginRight: halfGutter }
})

const styledRowGap = computed(() => {
  if (!props.gap) return {}
  return { rowGap: props.gap + 'px' }
})
</script>

<style scoped></style>
