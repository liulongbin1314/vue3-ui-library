<template>
  <component :is="tag" :class="[ns.b()]">
    <slot></slot>
  </component>
</template>

<script setup>
defineOptions({
  name: 'a-row'
})

defineProps({
  tag: {
    type: String,
    default: 'div'
  }
})

import { useNamespace } from '@ui-library/hooks'
const ns = useNamespace('row')
</script>

<style scoped></style>
