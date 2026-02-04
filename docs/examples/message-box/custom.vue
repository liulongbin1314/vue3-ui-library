<template>
  <p>基于 callback 的个性化弹窗：</p>
  <a-button type="primary" @click="open">展示提示消息</a-button>

  <hr />
  <p>基于 Promise 的个性化弹窗：</p>
  <a-button type="primary" @click="open2">展示提示消息</a-button>
</template>

<script setup>
import { ref } from 'vue'

// 定义布尔值，控制确认按钮的 loading 状态
const loading = ref(false)

const open = () => {
  AMessageBox({
    title: '标题',
    message: '这是使用 AMessageBox 展示的提示消息！',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    // 控制是否展示确认按钮的 loading
    confirmLoading: loading,
    type: 'success',
    gray: false,
    // 处理弹窗关闭前的操作
    beforeClose: (action, done) => {
      if (action === 'cancel') {
        done()
      } else {
        // 展示 loading
        loading.value = true
        AMessage.info(`2秒后自动关闭确认弹窗...`)
        setTimeout(() => {
          // 调用 done() 后会自动关闭 loading 状态
          done()
        }, 2000)
      }
    },
    callback: (action) => {
      if (action === 'confirm') {
        AMessage.success(`关闭成功！action 操作类型：${action}`)
      } else {
        AMessage.warning(`取消关闭！action 操作类型：${action}`)
      }
    }
  })
}

const open2 = () => {
  AMessageBox({
    title: '标题',
    message: '这是使用 AMessageBox 展示的提示消息！',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    // 控制是否展示确认按钮的 loading
    confirmLoading: loading,
    type: 'success',
    gray: false,
    // 处理弹窗关闭前的操作
    beforeClose: (action, done) => {
      if (action === 'cancel') {
        done(false)
      } else {
        // 展示 loading
        loading.value = true
        AMessage.info(`2秒后自动关闭确认弹窗...`)
        setTimeout(() => {
          // 调用 done() 后会自动关闭 loading 状态
          done()
        }, 2000)
      }
    }
  })
    .then((action) => AMessage.success(`关闭成功！action 操作类型：${action}`))
    .catch((action) => AMessage.warning(`取消关闭！action 操作类型：${action}`))
}
</script>
