<template>
  <p>基础用法</p>
  <div>
    <a-switch></a-switch>
  </div>

  <p>size 尺寸</p>
  <div class="row-gap">
    <a-switch size="small"></a-switch>
    <a-switch size="default"></a-switch>
    <a-switch size="large"></a-switch>
  </div>

  <p>v-model 指令</p>
  <div>
    <a-switch v-model="value1"></a-switch>
  </div>
  <p>{{ value1 }}</p>

  <p>动画效果</p>
  <div class="row-gap">
    <a-switch></a-switch>
    <a-switch transition="slide"></a-switch>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(false)
</script>

<style scoped></style>
