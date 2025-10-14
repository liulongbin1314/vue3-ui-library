<template>
  <i :class="[ns.b()]">
    <slot></slot>
  </i>
</template>

<script setup>
defineOptions({
  name: 'a-icon'
})

import { useNamespace } from '@ui-library/hooks'

const ns = useNamespace('icon')
</script>
