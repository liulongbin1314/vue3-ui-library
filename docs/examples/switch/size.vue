<template>
  <div class="container">
    <a-switch v-model="value1" size="small"></a-switch>
    <a-switch v-model="value2" size="default"></a-switch>
    <a-switch v-model="value3" size="large"></a-switch>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
</script>

<style scoped>
.container {
  display: flex;
  gap: 15px;
  align-items: end;
}
</style>
