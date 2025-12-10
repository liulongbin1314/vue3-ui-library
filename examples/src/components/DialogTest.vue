<template>
  <p>基础用法</p>
  <div class="row-gap">
    <a-button @click="visible1 = true" type="primary">展示 Dialog1</a-button>
  </div>

  <a-dialog title="温馨提示" v-model="visible1">
    <div>Hello world. 11111111111111111111111111111111111111111111111111111111111</div>
  </a-dialog>
</template>

<script setup>
import { AButton } from '@ui-library/components'
import { ref } from 'vue'

const visible1 = ref(false)
</script>

<style scoped></style>
