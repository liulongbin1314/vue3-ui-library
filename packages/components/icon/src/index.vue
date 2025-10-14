<template>
  <i :class="[ns.b()]" :style="[{ color }, { fontSize: size + 'px' }]">
    <slot></slot>
  </i>
</template>

<script setup>
defineOptions({
  name: 'a-icon'
})

defineProps({
  color: String,
  size: [String, Number]
})

import { useNamespace } from '@ui-library/hooks'

const ns = useNamespace('icon')
</script>
