<template>
  <label>
    <span>手机号：</span>
    <a-input
      v-model="input1"
      width="240"
      placeholder="请输入11位手机号"
      max-length="11"
      count
    ></a-input>
  </label>

  <hr />
  <label>
    <span>手机号：</span>
    <a-input
      v-model="input2"
      width="240"
      placeholder="请输入11位手机号"
      max-length="11"
      count
    ></a-input>
  </label>
</template>

<script setup>
import { ref } from 'vue'
const input1 = ref('')
const input2 = ref('138000000110')
</script>
