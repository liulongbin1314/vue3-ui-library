<template>
  <p>基础用法</p>
  <div>
    <a-button @click="show1">info</a-button>
    <a-button @click="closeAllMessage">全部关闭</a-button>
  </div>

  <p>主题颜色</p>
  <div>
    <a-button @click="show2('info')">info</a-button>
    <a-button @click="show2('primary')">primary</a-button>
    <a-button @click="show2('success')">success</a-button>
    <a-button @click="show2('warning')">warning</a-button>
    <a-button @click="show2('error')">error</a-button>
    <a-button @click="closeAllMessage">全部关闭</a-button>
  </div>

  <p>主题颜色 - background</p>
  <div>
    <a-button @click="show3('info')">info</a-button>
    <a-button @click="show3('primary')">primary</a-button>
    <a-button @click="show3('success')">success</a-button>
    <a-button @click="show3('warning')">warning</a-button>
    <a-button @click="show3('error')">error</a-button>
    <a-button @click="closeAllMessage">全部关闭</a-button>
  </div>

  <p>主题方法</p>
  <div>
    <a-button @click="show4('info')">info</a-button>
    <a-button @click="show4('primary')">primary</a-button>
    <a-button @click="show4('success')">success</a-button>
    <a-button @click="show4('warning')">warning</a-button>
    <a-button @click="show4('error')">error</a-button>
    <a-button @click="closeAllMessage">全部关闭</a-button>
  </div>
</template>

<script setup>
// 按需导入
import { AMessage, AButton } from '@ui-library/components'
// import { getCurrentInstance } from 'vue'
import '@ui-library/theme/src/message.scss'
import '@ui-library/theme/src/button.scss'

// const instance = getCurrentInstance()
// const $message = instance.appContext.config.globalProperties.$message
const $message = AMessage

const show1 = () => {
  // AMessage('这是一个info消息')
  // AMessage({
  //   content: '这是另外一个info消息'
  // })

  // $message('这是全局函数式组件的消息')
  $message({
    content: '这是另一个全局函数式组件的消息',
    duration: 1500
  })
}

const show2 = (type) => {
  $message({
    type,
    content: '这是另一个全局函数式组件的消息',
    duration: 1500
  })
}

const show3 = (type) => {
  AMessage({
    type,
    background: true,
    content: '这是另一个全局函数式组件的消息',
    duration: 1500
  })
}

const show4 = (type) => {
  AMessage[type]({
    background: true,
    content: '这是另一个全局函数式组件的消息',
    duration: 1500
  })
}

const closeAllMessage = () => {
  // $message.closeAll()
  AMessage.closeAll()
}
</script>

<style scoped></style>
