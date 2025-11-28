import { useStyle } from '@ui-library/hooks'
import { computed, getCurrentInstance, useId, ref } from 'vue'

export const useFormItemState = ({ formProps }) => {
  const instance = getCurrentInstance()
  const props = instance.props
  const uStyle = useStyle()

  const labelId = useId()
  const styledWidth = computed(() => uStyle.width(props.labelWidth || formProps?.labelWidth.value))
  const labelAlign = computed(() => props.labelPosition || formProps?.labelPosition.value)
  const styledTextAlign = computed(() => uStyle.textAlign(labelAlign.value))
  // 校验失败时候的错误消息
  const errorMessage = ref('')
  // 是否校验失败了
  const isInvalid = computed(() => errorMessage.value.length !== 0)
  const isRequired = computed(() => initRules.value.some((item) => item.required))
  const size = computed(() => formProps?.size.value || 'default')

  const convertToArray = (rules) => {
    if (!rules) return []
    if (Array.isArray(rules)) return rules
    return [rules]
  }

  // 当前表单项的所有的校验规则
  const initRules = computed(() => {
    // FormItem 自己的校验规则
    const itemRules = convertToArray(props.rules)
    // 从 Form 组件上继承的校验规则
    const formRules = convertToArray(formProps?.rules.value[props.prop])
    // 对两个校验规则进行合并
    return [...itemRules, ...formRules]
  })

  const filterRules = (trigger) => {
    return initRules.value.filter((item) => {
      // 1. 如果当前的 rule 规则没有指定 trigger 触发时机，
      //    则 return true，表示任何时候都应该触发此规则
      if (!item.trigger || !trigger) return true
      // 2. 如果 item.trigger 为数组，则应该判断数组中是否包含形参中的 trigger，
      //    如果包含，则 return true，表示需要触发此规则
      if (Array.isArray(item.trigger)) {
        return item.trigger.includes(trigger)
      }
      // 3. 如果 item.trigger 是字符串，则直接和形参中的 trigger 进行比较
      return item.trigger === trigger
    })
  }

  return {
    styledWidth,
    styledTextAlign,
    labelAlign,
    labelId,
    filterRules,
    errorMessage,
    isInvalid,
    isRequired,
    size
  }
}
