<template>
  <p>
    1500ms 后生成 1-10 之间的随机整数，如果数字<=5则提示成功，否则提示失败，并使用 resolve(cb) 与
    reject(cb) 指定成功和失败时的回调函数：
  </p>
  <a-switch
    type="primary"
    active-text="开启"
    inactive-text="关闭"
    :active-icon="Sun"
    :inactive-icon="Moon"
    center-icon
    v-model="value"
    :before-change="handleBeforeChange"
  ></a-switch>
  <p>开关的值：{{ value }}</p>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)

const handleBeforeChange = (nextValue, currentValue) => {
  AMessage({
    type: 'primary',
    background: true,
    content: `nextValue：${nextValue}，currentValue：${currentValue}`,
    duration: 4500
  })

  // 必须返回 Promise 实例对象
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.ceil(Math.random() * 10)
      // 判断随机数是否<=5
      if (num <= 5) {
        resolve(() => {
          AMessage({
            type: 'success',
            background: true,
            content: '成功了，数字值为：' + num
          })
        })
      } else {
        reject(() => {
          AMessage({
            type: 'error',
            background: true,
            content: '失败了，数字值为：' + num
          })
        })
      }
    }, 1500)
  })
}
</script>

<style scoped></style>
