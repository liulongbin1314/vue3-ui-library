<template>
  <a-button type="primary" @click="visible = true">展示 Dialog 弹窗</a-button>
  <a-dialog v-model="visible" title="标题">
    <p>这是弹窗组件的消息内容。</p>

    <template #icon="{ colors }">
      <a-icon icon="icon-fair" :color="colors.primary"></a-icon>
    </template>
  </a-dialog>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>
