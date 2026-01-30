<template>
  <p>scale 缩放动画：</p>
  <div class="container">
    <a-switch active-text="开" inactive-text="关"></a-switch>
    <a-switch active-icon="icon-flashlight" inactive-icon="icon-flashlight-turned-off"></a-switch>
  </div>

  <hr />
  <p>slide 滑动动画：</p>
  <div class="container">
    <a-switch transition="slide" active-text="开" inactive-text="关"></a-switch>
    <a-switch transition="slide" :active-icon="Mic" :inactive-icon="MicOff"></a-switch>
  </div>
</template>

<script setup>
import { Mic, MicOff } from 'escook-ui/icons'
</script>

<style scoped>
.container {
  display: flex;
  gap: 15px;
  align-items: end;
}
</style>
