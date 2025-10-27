<template>
  <section :class="[ns.b()]">
    <slot></slot>
  </section>
</template>

<script setup>
defineOptions({
  name: 'a-container'
})

import { useNamespace } from '@ui-library/hooks'
const ns = useNamespace('container')
</script>
