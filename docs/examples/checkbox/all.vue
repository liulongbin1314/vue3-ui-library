<template>
  <p>纵向布局</p>
  <a-checkbox-all
    direction="vertical"
    size="small"
    type="warning"
    text="check all"
    v-model="value1"
    @change="handleAllChange"
  >
    <a-checkbox value="beijing">北京市</a-checkbox>
    <a-checkbox value="shanghai">上海市</a-checkbox>
    <a-checkbox value="tianjin">天津市</a-checkbox>
    <a-checkbox value="chongqing">重庆市</a-checkbox>
  </a-checkbox-all>
  <p>选中的值：{{ value1 }}</p>

  <hr />
  <p>横向布局</p>
  <a-checkbox-all
    direction="horizontal"
    size="small"
    type="error"
    v-model="value2"
    @change="handleAllChange"
  >
    <a-checkbox value="beijing">北京市</a-checkbox>
    <a-checkbox value="shanghai">上海市</a-checkbox>
    <a-checkbox value="tianjin">天津市</a-checkbox>
    <a-checkbox value="chongqing">重庆市</a-checkbox>
  </a-checkbox-all>
  <p>选中的值：{{ value2 }}</p>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(['beijing', 'shanghai'])
const value2 = ref(['beijing', 'shanghai'])
</script>
