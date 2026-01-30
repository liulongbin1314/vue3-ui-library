<template>
  <a-radio v-model="gender" value="male">男</a-radio>
  <a-radio v-model="gender" value="female">女</a-radio>
  <p>选中的值：{{ gender }}</p>
</template>

<script setup>
import { ref } from 'vue'
const gender = ref('male')
</script>
