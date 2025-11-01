import { useCheckboxState } from './use-checkbox-state'

export const useCheckbox = () => {
  const { cbSize, isDisabled, isChecked } = useCheckboxState()

  return { cbSize, isDisabled, isChecked }
}
