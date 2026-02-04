<template>
  <p>基于 callback 的 confirm 弹窗：</p>
  <a-button type="primary" @click="open">展示提示消息</a-button>

  <hr />
  <p>基于 Promise 的 confirm 弹窗：</p>
  <a-button type="primary" @click="open2">展示提示消息</a-button>
</template>

<script setup>
const open = () => {
  AMessageBox.confirm('标题', '这是使用 AMessageBox.confirm() 展示的提示消息！', {
    confirmButtonText: 'OK',
    cancelButtonText: 'NO',
    // 在标题左侧，渲染默认图标和颜色
    type: 'success',
    gray: false,
    callback: (action) => {
      AMessage.info(`action 操作类型：${action}`)
    }
  })
}

const open2 = () => {
  AMessageBox.confirm('标题', '这是使用 AMessageBox.confirm() 展示的提示消息！', {
    type: 'info',
    // 自定义标题左侧的图标、图标颜色、图标尺寸
    icon: 'icon-follow-fill',
    iconColor: 'red',
    iconSize: 30
  })
    .then((action) => AMessage.success(`action 操作类型：${action}`))
    .catch((action) => AMessage.warning(`action 操作类型：${action}`))
}
</script>
