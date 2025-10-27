<template>
  <footer :class="[ns.b()]">
    <slot>Footer</slot>
  </footer>
</template>

<script setup>
defineOptions({
  name: 'a-footer'
})

import { useNamespace } from '@ui-library/hooks'
const ns = useNamespace('footer')
</script>
