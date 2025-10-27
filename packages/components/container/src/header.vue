<template>
  <header :class="[ns.b()]">
    <slot>Header</slot>
  </header>
</template>

<script setup>
defineOptions({
  name: 'a-header'
})

import { useNamespace } from '@ui-library/hooks'
const ns = useNamespace('header')
</script>
