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

  <p>文本框 - size</p>
  <div class="col-gap">
    <a-input size="small"></a-input>
    <a-input></a-input>
    <a-input size="large"></a-input>
  </div>

  <p>文本框 - round</p>
  <div class="col-gap">
    <a-input round size="large"></a-input>
  </div>

  <p>文本框 - 前缀、后缀 icon 图标</p>
  <div class="col-gap">
    <a-input prefix-icon="icon-search" :suffix-icon="PlusCircle"></a-input>
    <a-input prefix-icon="icon-cart-empty" :suffix-icon="Calendar"></a-input>
  </div>
</template>

<script setup>
import { Calendar, PlusCircle } from '@ui-library/icons'
</script>
