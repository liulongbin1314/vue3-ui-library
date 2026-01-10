<template>
  <p>基础用法</p>
  <a-mask :gray="true" :blur="true" @close="handleClose">
    <div class="box">Hello world.</div>
  </a-mask>
</template>

<script setup>
import { AMask } from '@ui-library/components'
import '@ui-library/theme/src/mask.scss'

const handleClose = () => {
  console.log('触发了遮罩层自定的close事件！')
}
</script>

<style scoped>
.box {
  box-sizing: border-box;
  width: 500px;
  height: 300px;
  border-radius: 15px;
  padding: 20px;
  background-color: red;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
