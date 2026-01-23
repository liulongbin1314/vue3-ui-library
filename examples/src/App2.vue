<template>
  <h1>App2</h1>

  <div>
    <AButton>默认按钮</AButton>
    <AButton type="primary">主要按钮</AButton>
    <AButton type="success">成功按钮</AButton>
    <AButton type="warning" @click="showMsg">警告按钮</AButton>
    <AButton type="error" @click="visible = true">
      <AIcon icon="icon-move"></AIcon>
      <span>错误按钮</span>
      <AIcon :icon="Flag"></AIcon>
    </AButton>
  </div>

  <ADialog v-model="visible" title="温馨提示" gray>
    <div>展示 Dialog 的消息内容</div>

    <template #icon="{ colors }">
      <AIcon :icon="Flag" size="24" :color="colors.error"></AIcon>
    </template>
  </ADialog>
</template>

<script setup>
import { ref } from 'vue'
// 按需导入组件
import { AButton, AIcon, AMessage, ADialog } from 'escook-ui'
import { Flag } from 'escook-ui/icons'
// 按需导入组件配套的样式
import 'escook-ui/theme/src/button.css'
import 'escook-ui/theme/src/message.css'
import 'escook-ui/theme/src/dialog.css'

const visible = ref(false)

const showMsg = () => {
  AMessage({
    type: 'warning',
    background: true,
    content: '这是一个消息'
  })
}
</script>

<style scoped></style>
