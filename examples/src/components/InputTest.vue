<template>
  <p>文本框</p>
  <div class="col-gap">
    <a-input></a-input>
  </div>

  <p>文本框 - 禁用状态</p>
  <div class="col-gap">
    <a-input disabled></a-input>
  </div>

  <p>文本框 - placeholder & maxLength</p>
  <div class="col-gap">
    <a-input placeholder="请输入11位手机号" :max-length="11"></a-input>
  </div>
</template>

<script setup></script>
