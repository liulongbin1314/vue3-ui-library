import { useCheckboxState } from './use-checkbox-state'

export const useCheckbox = () => {
  const { cbSize } = useCheckboxState()

  return { cbSize }
}
