<template>
  <header :class="[ns.b()]" :style="[styledHeight]">
    <slot>Header</slot>
  </header>
</template>

<script setup>
defineOptions({
  name: 'a-header'
})

const { height } = defineProps({
  height: {
    type: String,
    default: '60px'
  }
})

import { useNamespace, useStyle } from '@ui-library/hooks'
import { computed } from 'vue'
import { useSonOfContainer } from './composition'
useSonOfContainer()
const ns = useNamespace('header')
const uStyle = useStyle()
const styledHeight = computed(() => uStyle.height(height))
</script>
