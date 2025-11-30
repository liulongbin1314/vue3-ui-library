import { computed, getCurrentInstance, ref } from 'vue'
import { useFormItem } from '@ui-library/components/form/src/composables'

export const useRadioState = ({ model, isGroupMode, groupProps }) => {
  const instance = getCurrentInstance()
  const props = instance.props
  const { formProps } = useFormItem()

  const isChecked = computed(() => model.value === props.value)
  const isDisabled = computed(
    () => props.disabled || (isGroupMode.value && groupProps.disabled.value)
  )
  const radioSize = computed(
    () =>
      props.size ||
      (isGroupMode.value && groupProps.size.value) ||
      formProps?.size.value ||
      'default'
  )
  const radioType = computed(() => props.type || (isGroupMode.value && groupProps.type.value))
  const isLoading = ref(false)

  return { isChecked, isDisabled, radioSize, radioType, isLoading }
}
