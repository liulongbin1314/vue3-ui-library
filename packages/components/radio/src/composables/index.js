import { useRadioState } from './use-radio-state'
import { useRadioModel } from './use-radio-model'
import { useRadioGroup } from './use-radio-group'
import { useRadioEvent } from './use-radio-event'

export const useRadio = ({ radioModel }) => {
  const { isGroupMode, groupProps } = useRadioGroup()
  const { model } = useRadioModel({ radioModel, isGroupMode, groupProps })
  const { isChecked, isDisabled, radioSize, radioType, isLoading } = useRadioState({
    model,
    isGroupMode,
    groupProps
  })
  const { clickEvent } = useRadioEvent({ isDisabled, isLoading })

  return { isChecked, isDisabled, radioSize, model, radioType, isLoading, clickEvent }
}
