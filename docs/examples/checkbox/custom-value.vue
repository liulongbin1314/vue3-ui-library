<template>
  <a-checkbox v-model="value" true-value="Yes" false-value="No">同意许可协议</a-checkbox>
  <p>复选框的值：{{ value }}</p>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
