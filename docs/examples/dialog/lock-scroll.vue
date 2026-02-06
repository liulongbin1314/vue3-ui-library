<template>
  <a-button type="primary" @click="visible = true">展示 Dialog 弹窗</a-button>
  <a-dialog v-model="visible" title="标题" lock-scroll> 这是弹窗组件的消息内容。 </a-dialog>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>
