<template>
  <a-button-group>
    <a-button @click="size = 'small'">small</a-button>
    <a-button @click="size = 'default'">default</a-button>
    <a-button @click="size = 'large'">large</a-button>
  </a-button-group>

  <p>尺寸：{{ size }}</p>
  <p>性别：{{ gender }}</p>

  <hr />
  <a-radio-group v-model="gender" :size>
    <a-radio value="male">男</a-radio>
    <a-radio value="female">女</a-radio>
    <a-radio value="confidential">保密</a-radio>
  </a-radio-group>
</template>

<script setup>
import { ref } from 'vue'
const size = ref('large')
const gender = ref('male')
</script>

<style scoped>
.edu {
  display: flex;
  align-items: center;
}
</style>
