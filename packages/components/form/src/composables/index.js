import { useFormItemState } from './use-form-item-state'

export const useFormItem = () => {
  const state = useFormItemState()

  return { ...state }
}
