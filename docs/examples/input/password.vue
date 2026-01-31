<template>
  <a-input v-model="input" width="240" type="password" placeholder="请输入密码" password></a-input>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>
