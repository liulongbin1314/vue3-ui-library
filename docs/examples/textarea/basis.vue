<template>
  <a-textarea v-model="intro" placeholder="请输入个人简介"></a-textarea>
</template>

<script setup>
import { ref } from 'vue'
const intro = ref('')
</script>
