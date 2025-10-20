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
    <div v-if="_isPrepend" :class="[ns.e('aside-wrapper')]">
      <slot name="prepend"></slot>
    </div>
    <div :class="[ns.e('wrapper')]">
      <!-- 前缀区域 -->
      <div v-if="_isPrefix" :class="[ns.e('fix-wrapper'), ns.e('prefix')]">
        <!-- 小图标 -->
        <a-icon :icon="prefixIcon" v-if="prefixIcon"></a-icon>
        <!-- 文本内容 -->
        <span v-if="prefix">{{ prefix }}</span>
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
        <a-icon :icon="suffixIcon" v-if="suffixIcon"></a-icon>
        <!-- 文本内容 -->
        <span v-if="suffix">{{ suffix }}</span>
      </div>
    </div>
    <!-- 后置区域 -->
    <div v-if="_isAppend" :class="[ns.e('aside-wrapper')]">
      <slot name="append"></slot>
    </div>
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
  suffixIcon: [String, Object],
  // 前缀和后缀的文本内容
  prefix: String,
  suffix: String
})

import { useNamespace } from '@ui-library/hooks'
import { ref, computed, useSlots } from 'vue'
import { AIcon } from '@ui-library/components'

const ns = useNamespace('input')
const _isFocus = ref(false)
const slots = useSlots()

const focusHandler = (e) => {
  _isFocus.value = true
}
const blurHandler = (e) => {
  _isFocus.value = false
}

// 是否渲染前缀区域
const _isPrefix = computed(() => props.prefixIcon || props.prefix)
// 是否渲染后缀区域
const _isSuffix = computed(() => props.suffixIcon || props.suffix)

// 是否渲染前置区域
const _isPrepend = computed(() => slots.prepend)
// 是否渲染后置区域
const _isAppend = computed(() => slots.append)
</script>
