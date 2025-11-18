import { computed, getCurrentInstance } from 'vue'

export const useRadioState = () => {
  const instance = getCurrentInstance()
  const props = instance.props

  const isChecked = computed(() => true)
  const isDisabled = computed(() => props.disabled)

  return { isChecked, isDisabled }
}
