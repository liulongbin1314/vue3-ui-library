<template>
  <!-- 根元素 -->
  <div :class="[ns.b()]">
    <!-- 全选 -->
    <div :class="[ns.e('label')]">
      <!-- all 属性用来区分当前的复选框是否为“全选”的复选框  -->
      <!-- indeterminate 属性表示复选框是否处于中间状态 -->
      <!-- 如果全选了：则 indeterminate 为 false，isAllChecked 为 true -->
      <!-- 如果是部分选中：则 indeterminate 为 true，isAllChecked 为 false -->
      <!-- 如果全部选项都未选中：则 indeterminate 为 false，isAllChecked 为 false -->
      <ACheckbox all :indeterminate="indeterminate" v-model="isAllChecked">全选</ACheckbox>
    </div>

    <!-- 可选项 -->
    <div :class="[ns.e('options')]">
      <ACheckboxGroup>
        <slot></slot>
      </ACheckboxGroup>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-checkbox-all'
})

import { useNamespace } from '@ui-library/hooks'
import { ACheckbox, ACheckboxGroup } from '@ui-library/components'
import { ref } from 'vue'

// 是否处于中间状态
const indeterminate = ref(false)
// 是否全选了
const isAllChecked = ref(false)

const ns = useNamespace('checkbox-all')
</script>
