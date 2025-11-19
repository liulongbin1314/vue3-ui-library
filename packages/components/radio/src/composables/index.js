import { useRadioState } from './use-radio-state'

export const useRadio = () => {
  const { isChecked, isDisabled, radioSize } = useRadioState()

  return { isChecked, isDisabled, radioSize }
}
