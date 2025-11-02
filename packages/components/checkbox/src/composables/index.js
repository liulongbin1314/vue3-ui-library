import { useCheckboxState } from './use-checkbox-state'
import { useCheckboxGroup } from './use-checkbox-group'
import { useCheckboxModel } from './use-checkbox-model'

export const useCheckbox = ({ cbModel }) => {
  const { groupProps, isGroupMode } = useCheckboxGroup()
  const { model } = useCheckboxModel({ cbModel })
  const { cbSize, isDisabled, isChecked } = useCheckboxState({ groupProps, isGroupMode, model })

  return { cbSize, isDisabled, isChecked, model }
}
