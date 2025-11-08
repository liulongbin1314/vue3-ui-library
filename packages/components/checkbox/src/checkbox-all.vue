<template>
  <!-- 根元素 -->
  <div :class="[ns.b(), ns.is('horizontal', isHorizontal)]">
    <!-- 全选 -->
    <div :class="[ns.e('label')]">
      <!-- all 属性用来区分当前的复选框是否为“全选”的复选框  -->
      <!-- indeterminate 属性表示复选框是否处于中间状态 -->
      <!-- 如果全选了：则 indeterminate 为 false，isAllChecked 为 true -->
      <!-- 如果是部分选中：则 indeterminate 为 true，isAllChecked 为 false -->
      <!-- 如果全部选项都未选中：则 indeterminate 为 false，isAllChecked 为 false -->
      <ACheckbox all :indeterminate="indeterminate" v-model="isAllChecked" @change="handleChange"
        >全选</ACheckbox
      >
    </div>

    <!-- 可选项 -->
    <div :class="[ns.e('options')]">
      <ACheckboxGroup v-model="allModel">
        <slot></slot>
      </ACheckboxGroup>
    </div>
  </div>
  <p>{{ allOptions }}</p>
  <p>{{ allModel }}</p>
</template>

<script setup>
defineOptions({
  name: 'a-checkbox-all'
})

const props = defineProps({
  direction: {
    type: String,
    // horizontal
    default: 'vertical'
  }
})

const emit = defineEmits(['change'])

// 所有选中项的值
const allModel = defineModel({ type: Array, default: () => [] })

import { useNamespace } from '@ui-library/hooks'
import { ACheckbox, ACheckboxGroup } from '@ui-library/components'
import { ref, useSlots, watchEffect, watch, computed } from 'vue'

// 是否处于中间状态
const indeterminate = ref(false)
// 是否全选了
const isAllChecked = ref(false)
// 所有可选项的值
const allOptions = ref([])

const slots = useSlots()
const all = slots.default
  ? slots
      .default()
      .filter((item) => item.type.name === 'a-checkbox')
      .map((item) => item.props.value)
  : []
allOptions.value = all

watchEffect(() => {
  const checkedLength = allModel.value.length
  const allLength = allOptions.value.length

  if (allLength > 0 && checkedLength > 0 && allLength > checkedLength) {
    indeterminate.value = true
  } else {
    indeterminate.value = false
  }

  if (allLength === checkedLength && allLength !== 0) {
    isAllChecked.value = true
  } else {
    isAllChecked.value = false
  }
})

const handleChange = (value) => {
  if (value) {
    allModel.value = allOptions.value
  } else {
    allModel.value = []
  }
}

watch(
  () => allModel.value,
  (newValue) => {
    emit('change', [...newValue], isAllChecked.value)
  }
)

const isHorizontal = computed(() => props.direction === 'horizontal')

const ns = useNamespace('checkbox-all')
</script>
