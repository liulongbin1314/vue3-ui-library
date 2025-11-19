import { computed, getCurrentInstance } from 'vue'

export const useRadioModel = ({ radioModel, isGroupMode, groupProps }) => {
  const instance = getCurrentInstance()

  const model = computed({
    get() {
      if (isGroupMode.value) {
        return groupProps.groupModel.value
      }
      return radioModel.value
    },
    set(value) {
      if (isGroupMode.value) {
        groupProps.groupModel.value = value
        groupProps.changeEvent(value)
      } else {
        radioModel.value = value
        instance.emit('change', value)
      }
    }
  })

  return { model }
}
