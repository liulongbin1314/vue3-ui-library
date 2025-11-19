import { computed, getCurrentInstance } from 'vue'

export const useRadioState = ({ model, isGroupMode, groupProps }) => {
  const instance = getCurrentInstance()
  const props = instance.props

  const isChecked = computed(() => model.value === props.value)
  const isDisabled = computed(
    () => props.disabled || (isGroupMode.value && groupProps.disabled.value)
  )
  const radioSize = computed(() => props.size || (isGroupMode.value && groupProps.size.value))
  const radioType = computed(() => props.type || (isGroupMode.value && groupProps.type.value))

  return { isChecked, isDisabled, radioSize, radioType }
}
