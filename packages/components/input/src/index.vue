<template>
  <div :class="[ns.b(), ns.is('focus', _isFocus), ns.is('disabled', disabled)]">
    <!-- 前置区域 -->
    <!-- xxx -->
    <div :class="[ns.e('wrapper')]">
      <!-- 前缀区域 -->
      <!-- yyy -->
      <input
        type="text"
        :placeholder="placeholder"
        :class="[ns.e('inner')]"
        :disabled="disabled"
        :maxlength="maxLength"
        @focus="focusHandler"
        @blur="blurHandler"
      />
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

const props = defineProps({
  disabled: Boolean,
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  maxLength: [String, Number]
})

import { useNamespace } from '@ui-library/hooks'
import { ref } from 'vue'

const ns = useNamespace('input')
const _isFocus = ref(false)

const focusHandler = (e) => {
  _isFocus.value = true
}
const blurHandler = (e) => {
  _isFocus.value = false
}
</script>
