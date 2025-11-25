import { useStyle } from '@ui-library/hooks'
import { computed, getCurrentInstance, useId } from 'vue'

export const useFormItemState = ({ formProps }) => {
  const instance = getCurrentInstance()
  const props = instance.props
  const uStyle = useStyle()

  const labelId = useId()
  const styledWidth = computed(() => uStyle.width(props.labelWidth || formProps?.labelWidth.value))
  const labelAlign = computed(() => props.labelPosition || formProps?.labelPosition.value)
  const styledTextAlign = computed(() => uStyle.textAlign(labelAlign.value))

  const convertToArray = (rules) => {
    if (Array.isArray(rules)) return rules
    return [rules]
  }

  const initRules = computed(() => convertToArray(props.rules))

  const filterRules = (trigger) => {
    return initRules.value.filter((item) => {
      // 1. 如果当前的 rule 规则没有指定 trigger 触发时机，
      //    则 return true，表示任何时候都应该触发此规则
      if (!item.trigger) return true
      // 2. 如果 item.trigger 为数组，则应该判断数组中是否包含形参中的 trigger，
      //    如果包含，则 return true，表示需要触发此规则
      if (Array.isArray(item.trigger)) {
        return item.trigger.includes(trigger)
      }
      // 3. 如果 item.trigger 是字符串，则直接和形参中的 trigger 进行比较
      return item.trigger === trigger
    })
  }

  return { styledWidth, styledTextAlign, labelAlign, labelId, filterRules }
}
