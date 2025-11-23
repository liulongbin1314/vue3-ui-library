<template>
  <div :class="[ns.b()]">
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
  }
})

import { useNamespace } from '@ui-library/hooks'
import { provide, toRefs } from 'vue'
import { FORM_PROPS } from '../constant'

const ns = useNamespace('form')

provide(FORM_PROPS, { ...toRefs(props) })
</script>

<style scoped></style>
