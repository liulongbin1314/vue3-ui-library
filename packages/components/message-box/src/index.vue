<template>
  <ADialog v-model="visible">
    <span>Hello world.</span>
  </ADialog>
</template>

<script setup>
defineOptions({
  name: 'a-message-box'
})

import { ADialog } from '@ui-library/components'
import { useMessageBox } from './composables'

const { visible } = useMessageBox()
</script>

<style scoped></style>
