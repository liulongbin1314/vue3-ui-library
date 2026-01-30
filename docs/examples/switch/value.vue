<template>
  <a-switch v-model="value" active-value="OK" inactive-value="NO"></a-switch>
  <p>开关的值：{{ value }}</p>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
