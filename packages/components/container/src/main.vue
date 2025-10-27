<template>
  <main :class="[ns.b()]">
    <slot>Main</slot>
  </main>
</template>

<script setup>
defineOptions({
  name: 'a-main'
})

import { useNamespace } from '@ui-library/hooks'
const ns = useNamespace('main')
</script>
