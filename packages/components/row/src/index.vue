<template>
  <component :is="tag" :class="[ns.b()]" :style="[styledMargin]">
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
  }
})

import { useNamespace } from '@ui-library/hooks'
import { provide, computed } from 'vue'

const ns = useNamespace('row')
provide('gutter', props.gutter)

const styledMargin = computed(() => {
  if (!props.gutter) return {}
  const halfGutter = (props.gutter / 2) * -1 + 'px'
  return { marginLeft: halfGutter, marginRight: halfGutter }
})
</script>

<style scoped></style>
