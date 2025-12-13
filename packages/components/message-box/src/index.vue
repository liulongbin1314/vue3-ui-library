<template>
  <ADialog v-model="visible" v-bind="props" @closed="handleClosed">
    <span>Hello world.</span>
  </ADialog>
</template>

<script setup>
defineOptions({
  name: 'a-message-box'
})

const props = defineProps({ ...dialogProps })

import { ADialog } from '@ui-library/components'
import { useMessageBox } from './composables'
import { dialogProps } from '../../dialog/src/dialog-config'

const { visible, handleClosed } = useMessageBox()
</script>

<style scoped></style>
