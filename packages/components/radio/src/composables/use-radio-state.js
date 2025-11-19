import { computed, getCurrentInstance } from 'vue'

export const useRadioState = ({ model }) => {
  const instance = getCurrentInstance()
  const props = instance.props

  const isChecked = computed(() => model.value === props.value)
  const isDisabled = computed(() => props.disabled)
  const radioSize = computed(() => props.size)

  return { isChecked, isDisabled, radioSize }
}
