<template>
  <p>最多输入10个字符：</p>
  <a-textarea v-model="intro" placeholder="请输入个人简介" max-length="10"></a-textarea>
</template>

<script setup>
import { ref } from 'vue'
const intro = ref('1234567890')
</script>
