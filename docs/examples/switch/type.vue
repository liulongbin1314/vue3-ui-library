<template>
  <div class="container">
    <a-switch v-model="value" type="default"></a-switch>
    <a-switch v-model="value1" type="primary"></a-switch>
    <a-switch v-model="value2" type="success"></a-switch>
    <a-switch v-model="value3" type="warning"></a-switch>
    <a-switch v-model="value4" type="error"></a-switch>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
</script>

<style scoped>
.container {
  display: flex;
  gap: 15px;
  align-items: end;
}
</style>
