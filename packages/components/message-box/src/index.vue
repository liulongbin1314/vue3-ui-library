<template>
  <ADialog v-model="visible" v-bind="props" @closed="handleClosed">
    <span>{{ message }}</span>

    <template #icon="{ colors }" v-if="type || icon">
      <AIcon
        :icon="icon || typeToIcon[type]"
        :color="iconColor || colors[type] || 'black'"
        :size="iconSize"
      ></AIcon>
    </template>
  </ADialog>
</template>

<script setup>
defineOptions({
  name: 'a-message-box'
})

const props = defineProps({ ...dialogProps, ...messageBoxProps })

import { ADialog, AIcon } from '@ui-library/components'
import { useMessageBox } from './composables'
import { dialogProps } from '../../dialog/src/dialog-config'
import { messageBoxProps } from './message-box-config'

const { visible, handleClosed, typeToIcon } = useMessageBox()
</script>

<style scoped></style>
