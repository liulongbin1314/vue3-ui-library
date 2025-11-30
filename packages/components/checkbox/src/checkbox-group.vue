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
  size: String,
  beforeChange: Function,
  type: String,
  disabled: Boolean
})

const emit = defineEmits(['change'])

const groupModel = defineModel({ type: Array, default: () => [] })

import { useNamespace } from '@ui-library/hooks'
import { provide, toRefs } from 'vue'
import { CHECKBOX_GROUP_PROPS } from './constant'
import { useFormItem } from '@ui-library/components/form/src/composables'

const ns = useNamespace('checkbox-group')
const { formItemProps } = useFormItem()

const changeEvent = (value) => {
  groupModel.value = value
  emit('change', value)
  formItemProps?.validate('change')
}
provide(CHECKBOX_GROUP_PROPS, { ...toRefs(props), groupModel, changeEvent })
</script>
