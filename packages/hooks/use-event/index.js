import { ref, getCurrentInstance } from 'vue'

export const useEvent = () => {
  const isFocus = ref(false)
  const isEnter = ref(false)

  const { emit } = getCurrentInstance()

  const focusEvent = (e) => {
    isFocus.value = true
    emit('focus', e)
  }
  const blurEvent = (e) => {
    isFocus.value = false
    emit('blur', e)
  }

  const mouseenterEvent = (e) => {
    isEnter.value = true
    emit('mouseenter', e)
  }
  const mouseleaveEvent = (e) => {
    isEnter.value = false
    emit('mouseleave', e)
  }

  return { isFocus, focusEvent, blurEvent, isEnter, mouseenterEvent, mouseleaveEvent }
}
