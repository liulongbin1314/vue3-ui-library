<template>
  <div
    :class="[
      ns.b(),
      ns.is('focus', _isFocus),
      ns.is('disabled', disabled),
      ns.m('size', size),
      ns.is('round', round)
    ]"
  >
    <!-- 前置区域 -->
    <!-- xxx -->
    <div :class="[ns.e('wrapper')]">
      <!-- 前缀区域 -->
      <div v-if="_isPrefix" :class="[ns.e('fix-wrapper'), ns.e('prefix')]">
        <!-- 小图标 -->
        <a-icon :icon="prefixIcon"></a-icon>
      </div>
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
      <div v-if="_isSuffix" :class="[ns.e('fix-wrapper'), ns.e('suffix')]">
        <!-- 小图标 -->
        <a-icon :icon="suffixIcon"></a-icon>
      </div>
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
  maxLength: [String, Number],
  size: {
    type: String,
    default: 'default'
  },
  round: Boolean,
  // 前缀图标
  prefixIcon: [String, Object],
  // 后缀图标
  suffixIcon: [String, Object]
})

import { useNamespace } from '@ui-library/hooks'
import { ref, computed } from 'vue'
import { AIcon } from '@ui-library/components'

const ns = useNamespace('input')
const _isFocus = ref(false)

const focusHandler = (e) => {
  _isFocus.value = true
}
const blurHandler = (e) => {
  _isFocus.value = false
}

// 是否渲染前缀区域
const _isPrefix = computed(() => props.prefixIcon)
// 是否渲染后缀区域
const _isSuffix = computed(() => props.suffixIcon)
</script>
