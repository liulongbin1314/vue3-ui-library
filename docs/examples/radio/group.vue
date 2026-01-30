<template>
  <a-radio-group v-model="gender">
    <a-radio value="male">男</a-radio>
    <a-radio value="female">女</a-radio>
    <a-radio value="confidential">保密</a-radio>
  </a-radio-group>
  <p>选中的值：{{ gender }}</p>
</template>

<script setup>
import { ref } from 'vue'
const gender = ref('male')
</script>
