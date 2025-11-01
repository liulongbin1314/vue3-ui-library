import { useCheckboxState } from './use-checkbox-state'
import { useCheckboxGroup } from './use-checkbox-group'

export const useCheckbox = () => {
  const { groupProps, isGroupMode } = useCheckboxGroup()
  const { cbSize, isDisabled, isChecked } = useCheckboxState({ groupProps, isGroupMode })

  return { cbSize, isDisabled, isChecked }
}
