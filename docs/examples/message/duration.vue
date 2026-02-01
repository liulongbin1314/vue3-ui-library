<template>
  <div class="box">
    <a-button type="primary" @click="showMsg('primary')">primary</a-button>
    <a-button type="success" @click="showMsg('success')">success</a-button>
    <a-button type="warning" @click="showMsg('warning')">warning</a-button>
    <a-button type="default" @click="showMsg('info')">info</a-button>
    <a-button type="error" @click="showMsg('error')">error</a-button>
  </div>
</template>

<script setup>
const showMsg = (type) => {
  AMessage({
    content: '此消息5秒后自动关闭',
    type,
    background: true,
    // 消息5秒后自动关闭
    duration: 5000
  })
}
</script>

<style scoped>
.box {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
