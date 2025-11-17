<template>
  <!-- 根元素 -->
  <label :class="[ns.b()]">
    <!-- 左侧的容器 -->
    <span :class="[ns.e('wrapper')]">
      <!-- 被隐藏的真实的单选按钮 -->
      <input type="radio" :class="[ns.e('input')]" />
      <!-- 模拟的单选按钮 -->
      <span :class="[ns.e('inner')]">
        <!-- 选中后的小圆点 -->
        <span :class="[ns.e('dot')]"></span>
      </span>
    </span>

    <!-- 右侧的描述文本 -->
    <span :class="[ns.e('label')]">xxx</span>
  </label>
</template>

<script setup>
defineOptions({
  name: 'a-radio'
})

import { useNamespace } from '@ui-library/hooks'

const ns = useNamespace('radio')
</script>

<style scoped></style>
