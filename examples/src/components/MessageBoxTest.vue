<template>
  <p>基础用法</p>
  <div class="row-gap">
    <a-button @click="show1">展示第1个 MessageBox</a-button>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const $msgbox = instance.appContext.config.globalProperties.$msgbox

const show1 = () => {
  $msgbox()
}
</script>

<style scoped></style>
