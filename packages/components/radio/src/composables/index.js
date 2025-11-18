import { useRadioState } from './use-radio-state'

export const useRadio = () => {
  const { isChecked, isDisabled } = useRadioState()

  return { isChecked, isDisabled }
}
