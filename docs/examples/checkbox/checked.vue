<template>
  <a-checkbox checked @change="onChange">同意许可协议</a-checkbox>
</template>

<script setup>
// change 事件处理函数，形参 e 是最新的勾选状态
const onChange = (e) => {
  AMessage({
    type: 'success',
    background: true,
    content: '勾选状态为：' + e
  })
}
</script>

<style scoped></style>
