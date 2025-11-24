import { inject } from 'vue'
import { FORM_PROPS, FORM_ITEM_PROPS } from '../../constant'
import { useFormItemState } from './use-form-item-state'

export const useFormItem = () => {
  const formProps = inject(FORM_PROPS, undefined)
  const formItemProps = inject(FORM_ITEM_PROPS, undefined)

  const state = useFormItemState({ formProps })

  return { ...state, formItemProps, formProps }
}
