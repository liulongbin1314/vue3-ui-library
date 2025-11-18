import { useRadioState } from './use-radio-state'

export const useRadio = () => {
  const { isChecked } = useRadioState()

  return { isChecked }
}
