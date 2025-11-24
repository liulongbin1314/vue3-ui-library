import { useStyle } from '@ui-library/hooks'
import { computed, getCurrentInstance } from 'vue'

export const useFormItemState = ({ formProps }) => {
  const instance = getCurrentInstance()
  const props = instance.props
  const uStyle = useStyle()

  const styledWidth = computed(() => uStyle.width(props.labelWidth || formProps?.labelWidth.value))
  const labelAlign = computed(() => props.labelPosition || formProps?.labelPosition.value)
  const styledTextAlign = computed(() => uStyle.textAlign(labelAlign.value))

  return { styledWidth, styledTextAlign, labelAlign }
}
