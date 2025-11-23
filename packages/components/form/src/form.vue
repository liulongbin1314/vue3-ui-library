<template>
  <div :class="[ns.b()]" :style="[styledWidth]">
    <!-- 表单项 -->
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-form'
})

const props = defineProps({
  labelPosition: {
    type: String,
    // left / right / top
    default: 'right'
  },
  width: [String, Number]
})

import { useNamespace, useStyle } from '@ui-library/hooks'
import { provide, toRefs, computed } from 'vue'
import { FORM_PROPS } from '../constant'

const ns = useNamespace('form')
const uStyle = useStyle()
const styledWidth = computed(() => uStyle.width(props.width))

provide(FORM_PROPS, { ...toRefs(props) })
</script>

<style scoped></style>
