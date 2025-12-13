<template>
  <p>基础用法</p>
  <div class="row-gap">
    <a-button @click="show1">展示第1个 MessageBox</a-button>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import { AMessageBox } from '@ui-library/components'

const instance = getCurrentInstance()
const $msgbox = instance.appContext.config.globalProperties.$msgbox

const show1 = () => {
  // $msgbox()
  AMessageBox({
    title: '警告',
    message: '您确认删除此数据吗？',
    type: 'warning',
    gray: false,
    blur: false,
    penetrable: true
  })
}
</script>

<style scoped></style>
