import { useCheckboxState } from './use-checkbox-state'
import { useCheckboxGroup } from './use-checkbox-group'
import { useCheckboxModel } from './use-checkbox-model'
import { useCheckboxEvent } from './use-checkbox-event'

export const useCheckbox = ({ cbModel }) => {
  const { groupProps, isGroupMode, allProps, isAllMode } = useCheckboxGroup()
  const { model } = useCheckboxModel({ cbModel, groupProps, isGroupMode, allProps, isAllMode })
  const { cbSize, isDisabled, isChecked, isLoading } = useCheckboxState({
    groupProps,
    isGroupMode,
    model
  })
  const { clickEvent } = useCheckboxEvent({ groupProps, isGroupMode, model, isDisabled, isLoading })

  return { cbSize, isDisabled, isChecked, model, isLoading, clickEvent }
}
