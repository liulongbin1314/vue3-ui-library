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
  size: String,
  beforeChange: Function
})

const emit = defineEmits(['change'])

const groupModel = defineModel({ type: [String, Number, Boolean], default: '' })

import { useNamespace } from '@ui-library/hooks'
import { provide, toRefs, ref } from 'vue'
import { RADIO_GROUP_PROPS } from './constant'
import { useFormItem } from '@ui-library/components/form/src/composables'

const ns = useNamespace('radio-group')
const { formItemProps } = useFormItem()
const disabled = ref(props.disabled)

const changeEvent = (value) => {
  emit('change', value)
  formItemProps?.validate('change')
}

// 向下提供数据
provide(RADIO_GROUP_PROPS, { groupModel, changeEvent, ...toRefs(props), disabled })
</script>
