<template>
  <a-button @click="showMsg">展示 Message 消息</a-button>
</template>

<script setup>
const showMsg = () => {
  AMessage({ content: '这是一个消息' })
}
</script>
