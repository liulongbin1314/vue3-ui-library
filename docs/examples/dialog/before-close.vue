<template>
  <a-button type="primary" @click="visible = true">展示 Dialog 弹窗</a-button>

  <a-dialog
    v-model="visible"
    title="标题"
    confirm-loading
    :before-close="handleBeforeClose"
    @closed="onClosed"
  >
    <span>这是消息内容。</span>
  </a-dialog>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
let timer

const handleBeforeClose = (action, done) => {
  if (action !== 'confirm') return done()

  AMessage.info('3秒后自动关闭对话框！')
  timer = setTimeout(() => {
    done()
  }, 3000)
}

// 对话框关闭完成后，清理定时器
const onClosed = () => clearTimeout(timer)
</script>
