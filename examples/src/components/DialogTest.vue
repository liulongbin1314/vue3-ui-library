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
    :before-close="onBeforeClose"
    confirm-loading
    cancel-loading
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
import { AButton, AIcon, AInput, ADialog } from '@ui-library/components'
import { ref } from 'vue'
import { Flag } from '@ui-library/icons'

import '@ui-library/theme/src/button.scss'
import '@ui-library/theme/src/icon.scss'
import '@ui-library/theme/src/input.scss'
import '@ui-library/theme/src/dialog.scss'

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

// 形参中的 done 是一个关闭对话框的函数
// 形参中的 action 是关闭的类型
const onBeforeClose = (action, done) => {
  console.log('action: ', action)

  if (action === 'confirm') {
    setTimeout(() => {
      console.log('延时器结束了！')
      done()
    }, 2000)
  } else {
    done()
  }
}
</script>

<style scoped></style>
