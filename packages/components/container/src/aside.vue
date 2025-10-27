<template>
  <aside :class="[ns.b()]">
    <slot>Aside</slot>
  </aside>
</template>

<script setup>
defineOptions({
  name: 'a-aside'
})

import { useNamespace } from '@ui-library/hooks'
const ns = useNamespace('aside')
</script>
