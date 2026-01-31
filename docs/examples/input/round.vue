<template>
  <a-input v-model="input" width="240px" placeholder="请输入内容" round></a-input>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>
