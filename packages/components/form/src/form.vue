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

import { useNamespace } from '@ui-library/hooks'

const ns = useNamespace('form')
</script>

<style scoped></style>
