<template>
  <a-radio-group v-model="gender" :before-change="handleBeforeChange">
    <a-radio value="male">男</a-radio>
    <a-radio value="female">女</a-radio>
    <a-radio value="confidential">保密</a-radio>
  </a-radio-group>
  <p>性别：{{ gender }}</p>
</template>

<script setup>
import { ref } from 'vue'
const gender = ref('male')

const handleBeforeChange = (nextValue, currentValue) => {
  AMessage({
    type: 'info',
    background: true,
    content: `nextValue：${nextValue}， currentValue：${currentValue}`
  })

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(() => AMessage({ type: 'success', background: true, content: `成功啦！` }))
      // reject(() => AMessage({ type: 'error', background: true, content: `失败了！` }))
    }, 1500)
  })
}
</script>

<style scoped></style>
