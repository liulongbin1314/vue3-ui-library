<template>
  <!-- 根元素 -->
  <component :is="tag" :class="[ns.b(), ns.m('size', size)]">
    <!-- 外层容器 -->
    <span :class="[ns.e('wrapper')]">
      <!-- 真实的复选框 -->
      <input type="checkbox" :class="[ns.e('input')]" />
      <!-- 控制区域 -->
      <span :class="[ns.e('handle')]">
        <!-- 中心圆 -->
        <span :class="[ns.e('button')]"></span>
        <!-- 内层容器 -->
        <span :class="[ns.e('inner')]">
          <span :class="[ns.e('inner-checked')]">开</span>
          <span :class="[ns.e('inner-unchecked')]">关</span>
        </span>
      </span>
    </span>
  </component>
</template>

<script setup>
defineOptions({
  name: 'a-switch'
})

defineProps({
  tag: {
    type: String,
    default: 'label'
  },
  size: {
    type: String,
    default: 'default'
  }
})

import { useNamespace } from '@ui-library/hooks'

const ns = useNamespace('switch')
</script>

<style scoped></style>
