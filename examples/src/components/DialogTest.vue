<template>
  <p>基础用法</p>
  <div class="row-gap">
    <a-button @click="visible1 = true" type="primary">展示 Dialog1</a-button>
  </div>

  <div>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
    <h1>Hello liulongbin.</h1>
  </div>

  <a-dialog
    title="温馨提示"
    :distinguishCancelAndClose="true"
    destroyOnClosed
    lock-scroll
    fixed-screen
    v-model="visible1"
    @open="onOpen"
    @opened="onOpened"
    @close="onClose"
    @closed="onClosed"
  >
    <div>Hello world. 11111111111111111111111111111111111111111111111111111111111</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <div>Hello 刘老师！</div>
    <a-input v-model="msg"></a-input>
  </a-dialog>
</template>

<script setup>
import { AButton, AIcon } from '@ui-library/components'
import { ref } from 'vue'
import { Flag } from '@ui-library/icons'

const visible1 = ref(false)
const msg = ref('hello')

const reset = () => {
  msg.value = 'hello'
}

const onOpen = () => {
  console.log('open')
}

const onOpened = () => {
  console.log('opened')
}

const onClose = (action) => {
  console.log('close', action)
}

const onClosed = (action) => {
  console.log('closed', action)
  reset()
}
</script>

<style scoped></style>
