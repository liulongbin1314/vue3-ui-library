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
    <div v-if="_isPrepend" :class="[ns.e('aside-wrapper'), ns.e('prepend')]">
      <slot name="prepend" v-if="$slots.prepend"></slot>
      <span :class="[ns.e('prepend-text')]" v-if="prepend">{{ prepend }}</span>
    </div>
    <!-- 文本框的容器 -->
    <div :class="[ns.e('wrapper'), ns.is('prepend', _isPrepend), ns.is('append', _isAppend)]">
      <!-- 前缀区域 -->
      <div v-if="_isPrefix" :class="[ns.e('fix-wrapper'), ns.e('prefix')]">
        <!-- 小图标 -->
        <a-icon :icon="prefixIcon" v-if="prefixIcon"></a-icon>
        <!-- 文本内容 -->
        <span v-if="prefix">{{ prefix }}</span>
      </div>
      <input
        :type="_inputType"
        :placeholder="placeholder"
        :class="[ns.e('inner')]"
        :disabled="disabled"
        :maxlength="maxLength"
        :value="modelValue"
        ref="_inputRef"
        @focus="focusHandler"
        @blur="blurHandler"
        @input="inputHandler"
      />
      <!-- 后缀区域 -->
      <div v-if="_isSuffix" :class="[ns.e('fix-wrapper'), ns.e('suffix')]">
        <!-- 小图标 -->
        <a-icon :icon="suffixIcon" v-if="suffixIcon"></a-icon>
        <!-- 文本内容 -->
        <span v-if="suffix">{{ suffix }}</span>
        <!-- 展示/隐藏密码的小图标 -->
        <a-icon :icon="_pwdIcon" v-if="_showPwdIcon" @click="_pwdVisible = !_pwdVisible"></a-icon>
        <!-- 清空的图标 -->
        <a-icon :icon="XCircle" v-if="_showClearIcon" @click="clearHandler"></a-icon>
        <!-- 统计字数 -->
        <span v-if="_showCount" :class="[ns.is('color-error', _isColorDanger)]"
          >{{ modelValue.length }}/{{ maxLength }}</span
        >
      </div>
    </div>
    <!-- 后置区域 -->
    <div v-if="_isAppend" :class="[ns.e('aside-wrapper'), ns.e('append')]">
      <slot name="append" v-if="$slots.append"></slot>
      <span :class="[ns.e('append-text')]" v-if="append">{{ append }}</span>
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
  suffix: String,
  // 前置和后置的文本内容
  prepend: String,
  append: String,
  password: Boolean,
  clearable: Boolean,
  count: Boolean
})

const emit = defineEmits(['input', 'clear'])

import { useNamespace } from '@ui-library/hooks'
import { ref, computed, useSlots, provide, shallowRef } from 'vue'
import { AIcon } from '@ui-library/components'
import { Eye, EyeOff, XCircle } from '@ui-library/icons'

const ns = useNamespace('input')
const _isFocus = ref(false)
const slots = useSlots()
provide('groupSize', props.size)
const modelValue = defineModel({ default: '' })
const _inputRef = shallowRef(null)

const focusHandler = (e) => {
  _isFocus.value = true
}
const blurHandler = (e) => {
  _isFocus.value = false
}
const inputHandler = (e) => {
  modelValue.value = e.currentTarget.value
  // 触发自定义的 input 事件
  emit('input', e.currentTarget.value, e)
}
const clearHandler = () => {
  modelValue.value = ''
  emit('input', '')
  emit('clear')
  _inputRef.value?.focus()
}

// 是否渲染前缀区域
const _isPrefix = computed(() => props.prefixIcon || props.prefix)
// 是否渲染后缀区域
const _isSuffix = computed(
  () =>
    props.suffixIcon ||
    props.suffix ||
    _showPwdIcon.value ||
    _showClearIcon.value ||
    _showCount.value
)

// 是否渲染前置区域
const _isPrepend = computed(() => slots.prepend || props.prepend)
// 是否渲染后置区域
const _isAppend = computed(() => slots.append || props.append)

// 布尔值
// 如果值为 true，则展示原密码，且展示打开的眼睛
// 如果值为 false，则不展示原密码，且展示关闭的眼睛
const _pwdVisible = ref(false)
// 动态计算输入框的类型
const _inputType = computed(() =>
  props.password ? (_pwdVisible.value ? 'text' : 'password') : 'text'
)
// 动态计算密码框的图标
const _pwdIcon = computed(() => (_pwdVisible.value ? Eye : EyeOff))

// 计算属性
const _showPwdIcon = computed(() => props.password && !props.disabled)
const _showClearIcon = computed(
  () => props.clearable && modelValue.value !== '' && !props.disabled && !props.password
)
const _showCount = computed(() => props.count && props.maxLength && !props.disabled)
const _isColorDanger = computed(() => modelValue.value.length > Number(props.maxLength))
</script>
