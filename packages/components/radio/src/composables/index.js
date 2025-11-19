import { useRadioState } from './use-radio-state'
import { useRadioModel } from './use-radio-model'

export const useRadio = ({ radioModel }) => {
  const { model } = useRadioModel({ radioModel })
  const { isChecked, isDisabled, radioSize } = useRadioState({ model })

  return { isChecked, isDisabled, radioSize, model }
}
