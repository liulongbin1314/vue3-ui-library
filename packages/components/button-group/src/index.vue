<template>
  <!-- 按钮组的容器 -->
  <div :class="[ns.b()]">
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-button-group'
})

const props = defineProps({
  size: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'primary'
  }
})

import { useNamespace } from '@ui-library/hooks'
import { provide, toRefs } from 'vue'

const ns = useNamespace('button-group')
// 向子组件提供数据
provide('isGroup', true)
// 向子组件提供尺寸
// provide('groupSize', props.size)
// provide('groupType', toRef(props.type))
provide('groupProps', toRefs(props))
</script>

<style scoped></style>
