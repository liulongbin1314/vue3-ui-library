<template>
  <p>基础用法</p>
  <div>
    <a-button @click="show1">info</a-button>
    <a-button @click="closeAllMessage">全部关闭</a-button>
  </div>
</template>

<script setup>
// 按需导入
import { AMessage } from '@ui-library/components'
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const $message = instance.appContext.config.globalProperties.$message

const show1 = () => {
  // AMessage('这是一个info消息')
  // AMessage({
  //   content: '这是另外一个info消息'
  // })

  // $message('这是全局函数式组件的消息')
  $message({
    content: '这是另一个全局函数式组件的消息',
    duration: 15000
  })
}

const closeAllMessage = () => {
  // $message.closeAll()
  AMessage.closeAll()
}
</script>

<style scoped></style>
