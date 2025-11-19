<template>
  <div :class="[ns.b()]">
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-radio-group'
})

const props = defineProps({
  type: String,
  disabled: Boolean,
  size: String
})

const emit = defineEmits(['change'])

const groupModel = defineModel({ type: [String, Number, Boolean], default: '' })

import { useNamespace } from '@ui-library/hooks'
import { provide, toRefs } from 'vue'
import { RADIO_GROUP_PROPS } from './constant'

const ns = useNamespace('radio-group')
const changeEvent = (value) => {
  emit('change', value)
}

// 向下提供数据
provide(RADIO_GROUP_PROPS, { groupModel, changeEvent, ...toRefs(props) })
</script>
