<template>
  <p>基础用法</p>
  <a-mask :gray="false" :blur="false" penetrable>
    <div class="box">Hello world.</div>
  </a-mask>
</template>

<script setup></script>

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
