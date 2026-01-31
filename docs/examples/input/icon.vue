<template>
  <div class="box">
    <a-input width="240" prefix-icon="icon-search" :suffix-icon="PlusCircle"></a-input>
    <a-input width="240" prefix-icon="icon-cart-empty" :suffix-icon="Calendar"></a-input>
  </div>
</template>

<script setup>
import { PlusCircle, Calendar } from 'escook-ui/icons'
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
