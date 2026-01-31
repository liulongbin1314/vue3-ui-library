<template>
  <label>
    <span>手机号：</span>
    <a-input v-model="input" width="240" placeholder="请输入11位手机号" max-length="11"></a-input>
  </label>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>
