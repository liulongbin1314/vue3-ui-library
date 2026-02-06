<template>
  <a-button-group type="primary">
    <a-button @click="showDialog(true)">固定 Header 和 Footer</a-button>
    <a-button @click="showDialog(false)">取消固定 Header 和 Footer</a-button>
  </a-button-group>

  <a-dialog v-model="visible" title="标题" lock-scroll :fixed-screen="isFixed">
    <div>
      <p>第一行</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>这是弹窗组件的消息内容。</p>
      <p>最后一行</p>
    </div>
  </a-dialog>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const isFixed = ref(true)

const showDialog = (boo) => {
  isFixed.value = boo
  visible.value = true
  if (boo) {
    AMessage.success('已固定')
  } else {
    AMessage.warning('取消固定')
  }
}
</script>
