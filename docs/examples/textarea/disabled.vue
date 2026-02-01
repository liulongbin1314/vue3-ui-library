<template>
  <a-textarea v-model="intro" placeholder="请输入个人简介" disabled></a-textarea>
</template>

<script setup>
import { ref } from 'vue'
const intro = ref('地表最强系列·前端视频教程')
</script>
