<template>
  <p>基于 callback 的 alert 弹窗：</p>
  <a-button type="primary" @click="open">展示提示消息</a-button>

  <hr />
  <p>基于 Promise 的 alert 弹窗：</p>
  <a-button type="primary" @click="open2">展示提示消息</a-button>
</template>

<script setup>
const open = () => {
  AMessageBox.alert('标题', '这是使用 AMessageBox.alert() 展示的提示消息！', {
    gray: false,
    callback: (action) => {
      AMessage.info(`action 操作类型：${action}`)
    }
  })
}

const open2 = () => {
  AMessageBox.alert('标题', '这是使用 AMessageBox.alert() 展示的提示消息！', {
    confirmButtonText: '好滴好滴呀'
  })
    .then((action) => AMessage.success(`action 操作类型：${action}`))
    .catch((action) => AMessage.warning(`action 操作类型：${action}`))
}
</script>
