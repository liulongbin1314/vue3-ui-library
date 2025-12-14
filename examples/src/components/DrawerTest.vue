<template>
  <p>基础用法</p>
  <div class="row-gap">
    <a-button type="primary" @click="show">Right Drawer</a-button>
  </div>

  <a-drawer v-model="visible" title="标题">
    <span>这是内容</span>
  </a-drawer>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)

const show = () => {
  visible.value = true
}
</script>

<style scoped></style>
