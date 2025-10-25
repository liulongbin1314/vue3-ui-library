<template>
  <div
    :class="[ns.b(), ns.is('focus', isFocus), ns.is('disabled', disabled)]"
    :style="[styledWidth]"
    @mouseenter="mouseenterEvent"
    @mouseleave="mouseleaveEvent"
  >
    <!-- 前置区域 -->
    <!-- 文本框的容器 -->
    <div :class="[ns.e('wrapper'), ns.e('wrapper-multi')]">
      <!-- 前缀区域 -->
      <textarea
        :rows="rows"
        :placeholder="placeholder"
        :class="[ns.e('inner'), ns.e('multi')]"
        :disabled="disabled"
        :maxlength="maxLength"
        :value="modelValue"
        ref="_inputRef"
        @focus="focusEvent"
        @blur="blurEvent"
        @keydown="keydownEvent"
        @keyup="keyupEvent"
        @input="inputHandler"
        @change="changeEvent"
        @compositionstart="compositionstartEvent"
        @compositionupdate="compositionupdateEvent"
        @compositionend="compositionendHandler"
      ></textarea>
      <!-- 后缀区域 -->
      <div v-if="_isSuffix" :class="[ns.e('fix-wrapper'), ns.e('suffix'), ns.e('suffix-multi')]">
        <!-- 统计字数 -->
        <span v-if="_showCount" :class="[ns.is('color-error', _isColorDanger)]"
          >{{ modelValue.length }}/{{ maxLength }}</span
        >
      </div>
    </div>
    <!-- 后置区域 -->
  </div>
</template>

<script setup>
defineOptions({
  name: 'a-textarea'
})

const props = defineProps({
  disabled: Boolean,
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  maxLength: [String, Number],
  count: Boolean,
  width: String,
  rows: [String, Number]
})

const emit = defineEmits([
  'input',
  'change',
  'clear',
  'blur',
  'focus',
  'mouseenter',
  'mouseleave',
  'keydown',
  'keyup',
  'compositionstart',
  'compositionupdate',
  'compositionend'
])

import { useNamespace, useStyle, useEvent, useExpose } from '@ui-library/hooks'
import { computed, shallowRef } from 'vue'

const ns = useNamespace('input')

const modelValue = defineModel({ default: '' })
const _inputRef = shallowRef(null)
const uStyle = useStyle()
const {
  isFocus,
  focusEvent,
  blurEvent,
  mouseenterEvent,
  mouseleaveEvent,
  keydownEvent,
  keyupEvent,
  inputEvent,
  changeEvent,
  compositionstartEvent,
  compositionupdateEvent,
  compositionendEvent,
  isComposition
} = useEvent()
const { focusExpose, selectExpose } = useExpose(_inputRef)

const styledWidth = uStyle.width(props.width)

// compositionend 事件的处理函数
const compositionendHandler = (e) => {
  compositionendEvent(e).then(() => inputHandler(e))
}
const inputHandler = (e) => {
  // 如果当前正在组合文字，则 return 出去，避免在组合文字的过程中，触发 input 事件的逻辑
  if (isComposition.value) return
  modelValue.value = e.currentTarget.value
  // 触发自定义的 input 事件
  inputEvent(e)
}
const clearHandler = () => {
  modelValue.value = ''
  emit('input', '')
  emit('clear')
  _inputRef.value?.focus()
}

defineExpose({
  focus: focusExpose,
  select: selectExpose,
  clear: clearHandler
})

// 是否渲染后缀区域
const _isSuffix = computed(() => _showCount.value)
const _showCount = computed(() => props.count && props.maxLength && !props.disabled)
const _isColorDanger = computed(() => modelValue.value.length > Number(props.maxLength))
</script>
