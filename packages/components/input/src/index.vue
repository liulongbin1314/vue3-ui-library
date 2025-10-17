<template>
  <div :class="[ns.b()]">
    <!-- 前置区域 -->
    <!-- xxx -->
    <div :class="[ns.e('wrapper')]">
      <!-- 前缀区域 -->
      <!-- yyy -->
      <input type="text" placeholder="请输入内容" :class="[ns.e('inner')]" />
      <!-- 后缀区域 -->
      <!-- yyy -->
    </div>
    <!-- 后置区域 -->
    <!-- xxx -->
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-input'
})

import { useNamespace } from '@ui-library/hooks'

const ns = useNamespace('input')
</script>
