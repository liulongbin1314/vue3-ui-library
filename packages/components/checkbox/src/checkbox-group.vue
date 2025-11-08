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
  },
  beforeChange: Function,
  type: String
})

const emit = defineEmits(['change'])

const groupModel = defineModel({ type: Array, default: () => [] })

import { useNamespace } from '@ui-library/hooks'
import { provide, toRefs } from 'vue'
import { CHECKBOX_GROUP_PROPS } from './constant'

const ns = useNamespace('checkbox-group')
const changeEvent = (value) => {
  groupModel.value = value
  emit('change', value)
}
provide(CHECKBOX_GROUP_PROPS, { ...toRefs(props), groupModel, changeEvent })
</script>
