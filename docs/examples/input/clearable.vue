<template>
  <a-input v-model="input" width="240px" placeholder="请输入内容" clearable></a-input>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('你好，刘龙宾老师！')
</script>
