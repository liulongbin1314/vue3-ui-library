<template>
  <!-- 根元素 -->
  <div :class="[ns.b()]">
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-checkbox-group'
})

const props = defineProps({
  size: {
    type: String,
    default: 'default'
  }
})

const groupModel = defineModel({ type: Array, default: () => [] })

import { useNamespace } from '@ui-library/hooks'
import { provide, toRefs } from 'vue'
import { CHECKBOX_GROUP_PROPS } from './constant'

const ns = useNamespace('checkbox-group')
provide(CHECKBOX_GROUP_PROPS, { ...toRefs(props), groupModel })
</script>
