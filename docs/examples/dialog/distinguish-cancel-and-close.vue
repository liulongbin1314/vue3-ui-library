<template>
  <p>不区分取消与关闭操作：</p>
  <a-button type="primary" @click="visible = true">展示 Dialog 弹窗</a-button>
  <a-dialog v-model="visible" title="标题" @closed="onClosed"> 这是弹窗组件的消息内容。 </a-dialog>

  <hr />
  <p>区分取消与关闭操作：</p>
  <a-button type="primary" @click="visible2 = true">展示 Dialog 弹窗</a-button>
  <a-dialog v-model="visible2" title="标题" @closed="onClosed2" distinguish-cancel-and-close>
    这是弹窗组件的消息内容。
  </a-dialog>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const visible2 = ref(false)

const onClosed = (action) => {
  AMessage({
    type: 'primary',
    background: true,
    content: `action 操作类型：${action}`
  })
}

const onClosed2 = (action) => {
  AMessage({
    type: 'success',
    background: true,
    content: `action 操作类型：${action}`
  })
}
</script>
