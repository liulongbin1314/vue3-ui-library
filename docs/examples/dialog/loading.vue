<template>
  <a-button type="primary" @click="visible = true">展示 Dialog 弹窗</a-button>
  <a-dialog
    v-model="visible"
    title="标题"
    distinguish-cancel-and-close
    cancel-loading
    confirm-loading
    :before-close="onBeforeClose"
    @closed="onClosed"
  >
    这是弹窗组件的消息内容。
  </a-dialog>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
let timer

const onBeforeClose = (action, done) => {
  AMessage.info(`action 操作类型：${action}`)

  if (action !== 'cancel' && action !== 'confirm') return done()

  timer = setTimeout(() => {
    AMessage.success(`异步操作完成！`)
    // 调用 done() 回调关闭弹窗
    done()
  }, 3000)
}

const onClosed = () => {
  clearTimeout(timer)
}
</script>
