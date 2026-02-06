<template>
  <a-button type="primary" @click="visible = true">展示 Dialog 弹窗</a-button>
  <a-dialog
    v-model="visible"
    title="标题"
    :blur="false"
    :gray="true"
    :show-close="false"
    button-size="small"
    width="350"
    :cancel-button-show="false"
    :escape-close="false"
    :mask-close="false"
    confirm-button-text="无论如何都想关闭它"
  >
    这是弹窗组件的消息内容。
  </a-dialog>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>
