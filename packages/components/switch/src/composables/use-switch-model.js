import { computed } from 'vue'

export const useSwitchModel = ({ switchModel }) => {
  const model = computed({
    get() {
      return switchModel.value
    },
    set(value) {
      switchModel.value = value
    }
  })

  return { model }
}
