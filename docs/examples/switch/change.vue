<template>
  <a-switch v-model="value" active-value="OK" inactive-value="NO" @change="handleChange"></a-switch>
  <p>开关的值：{{ value }}</p>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)

// change 事件处理函数
const handleChange = (value) => {
  AMessage({
    type: 'success',
    background: true,
    content: `触发 change 事件，形参 value 值：${value}`
  })
}
</script>
