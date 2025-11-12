<template>
  <!-- 根元素 -->
  <component :is="tag" :class="[ns.b(), ns.m('size', size), ns.is('checked', model)]">
    <!-- 外层容器 -->
    <span :class="[ns.e('wrapper')]">
      <!-- 真实的复选框 -->
      <input type="checkbox" v-model="model" :class="[ns.e('input')]" />
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

const switchModel = defineModel({ type: [String, Number, Boolean], default: false })

import { useNamespace } from '@ui-library/hooks'
import { useSwitch } from './composables'

const ns = useNamespace('switch')
const { model } = useSwitch({ switchModel })
</script>

<style scoped></style>
