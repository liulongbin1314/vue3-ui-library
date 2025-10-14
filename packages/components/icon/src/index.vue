<template>
  <i :class="[ns.b()]" :style="[styledColor, styledFSize]">
    <slot></slot>
  </i>
</template>

<script setup>
defineOptions({
  name: 'a-icon'
})

const { color, size } = defineProps({
  color: String,
  size: [String, Number]
})

import { useNamespace, useStyle } from '@ui-library/hooks'
import { computed } from 'vue'

const ns = useNamespace('icon')
const uStyle = useStyle()

const styledFSize = computed(() => uStyle.fontSize(size))
const styledColor = computed(() => uStyle.color(color))
</script>
