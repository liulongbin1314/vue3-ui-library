import { useRadioState } from './use-radio-state'
import { useRadioModel } from './use-radio-model'
import { useRadioGroup } from './use-radio-group'

export const useRadio = ({ radioModel }) => {
  const { isGroupMode, groupProps } = useRadioGroup()
  const { model } = useRadioModel({ radioModel, isGroupMode, groupProps })
  const { isChecked, isDisabled, radioSize } = useRadioState({ model })

  return { isChecked, isDisabled, radioSize, model }
}
