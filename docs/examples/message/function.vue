<template>
  <div class="box">
    <a-button type="primary" @click="showMsg1">primary</a-button>
    <a-button type="success" @click="showMsg2">success</a-button>
    <a-button type="warning" @click="showMsg3">warning</a-button>
    <a-button type="default" @click="showMsg4">info</a-button>
    <a-button type="error" @click="showMsg5">error</a-button>
  </div>
</template>

<script setup>
const showMsg1 = () => {
  AMessage.primary('这是 primary 消息')
}

const showMsg2 = () => {
  AMessage.success('这是 success 消息')
}

const showMsg3 = () => {
  AMessage.warning('这是 warning 消息')
}

const showMsg4 = () => {
  AMessage.info('这是 info 消息')
}

const showMsg5 = () => {
  AMessage.error('这是 error 消息')
}
</script>

<style scoped>
.box {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
