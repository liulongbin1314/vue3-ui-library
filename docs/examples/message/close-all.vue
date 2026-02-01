<template>
  <a-button type="primary" round border @click="closeAll">点击关闭所有消息</a-button>

  <hr />
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
    content: '这是一个消息',
    type,
    background: true,
    duration: 5000
  })
}

// 一键关闭所有消息
const closeAll = () => AMessage.closeAll()
</script>

<style scoped>
.box {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
