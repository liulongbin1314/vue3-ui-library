<template>
  <p>基础用法</p>
  <div class="row-gap">
    <a-button @click="visible1 = true" type="primary">展示 Dialog1</a-button>
  </div>

  <a-dialog
    title="温馨提示"
    v-model="visible1"
    @open="onOpen"
    @opened="onOpened"
    @close="onClose"
    @closed="onClosed"
  >
    <div>Hello world. 11111111111111111111111111111111111111111111111111111111111</div>
  </a-dialog>
</template>

<script setup>
import { AButton, AIcon } from '@ui-library/components'
import { ref } from 'vue'
import { Flag } from '@ui-library/icons'

const visible1 = ref(false)

const onOpen = () => {
  console.log('open')
}

const onOpened = () => {
  console.log('opened')
}

const onClose = () => {
  console.log('close')
}

const onClosed = () => {
  console.log('closed')
}
</script>

<style scoped></style>
