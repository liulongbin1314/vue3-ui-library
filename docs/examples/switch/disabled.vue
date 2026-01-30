<template>
  <div class="container">
    <a-switch v-model="value" disabled></a-switch>
    <a-switch v-model="value" type="primary" disabled></a-switch>
    <a-switch v-model="value" type="success" disabled></a-switch>
    <a-switch v-model="value" type="warning" disabled></a-switch>
    <a-switch v-model="value" type="error" disabled></a-switch>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>

<style scoped>
.container {
  display: flex;
  gap: 15px;
  align-items: end;
}
</style>
