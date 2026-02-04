<template>
  <a-button type="primary" @click="open">展示提示消息</a-button>
</template>

<script setup>
const open = () => {
  AMessageBox.confirm('标题', '这是使用 AMessageBox.confirm() 展示的提示消息！', {
    type: 'info',
    // 区分取消操作与关闭操作
    distinguishCancelAndClose: true,
    callback: (action) => {
      AMessage.info(`action 操作类型：${action}`)
    }
  })
}
</script>
