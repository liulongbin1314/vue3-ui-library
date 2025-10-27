<template>
  <aside :class="[ns.b()]" :style="[styledWidth]">
    <slot>Aside</slot>
  </aside>
</template>

<script setup>
defineOptions({
  name: 'a-aside'
})

const { width } = defineProps({
  width: {
    type: String,
    default: '300px'
  }
})

import { useNamespace, useStyle } from '@ui-library/hooks'
import { computed } from 'vue'
import { useSonOfContainer } from './composition'
useSonOfContainer()

const ns = useNamespace('aside')
const uStyle = useStyle()
const styledWidth = computed(() => uStyle.width(width))
</script>
