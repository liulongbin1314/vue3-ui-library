<template>
  <a-switch v-model="value"></a-switch>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
