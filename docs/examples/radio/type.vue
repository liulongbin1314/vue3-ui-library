<template>
  <p>分别为每个 a-radio 设置 type 主题颜色：</p>
  <a-radio-group v-model="edu">
    <a-radio value="专科" type="primary">专科</a-radio>
    <a-radio value="本科" type="success">本科</a-radio>
    <a-radio value="硕士" type="warning">硕士</a-radio>
    <a-radio value="博士" type="error">博士</a-radio>
  </a-radio-group>
  <p>学历：{{ edu }}</p>

  <hr />
  <p>统一为 a-radio-group 设置 type 主题颜色：</p>
  <a-radio-group v-model="gender" type="success">
    <a-radio value="male">男</a-radio>
    <a-radio value="female">女</a-radio>
    <a-radio value="confidential" type="error">保密</a-radio>
  </a-radio-group>
  <p>性别：{{ gender }}</p>
</template>

<script setup>
import { ref } from 'vue'
const edu = ref('专科')
const gender = ref('male')
</script>
