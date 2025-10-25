<template>
  <component :is="tag" :class="[ns.b()]">
    <slot></slot>
  </component>
</template>

<script setup>
defineOptions({
  name: 'a-col'
})

defineProps({
  tag: {
    type: String,
    default: 'div'
  }
})

import { useNamespace } from '@ui-library/hooks'
const ns = useNamespace('col')
</script>

<style scoped></style>
