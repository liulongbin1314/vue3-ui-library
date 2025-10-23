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

  const keydownEvent = (e) => {
    emit('keydown', e)
  }
  const keyupEvent = (e) => {
    emit('keyup', e)
  }

  const inputEvent = (e) => {
    emit('input', e.target.value, e)
  }
  const changeEvent = (e) => {
    emit('change', e.target.value, e)
  }

  const compositionstartEvent = (e) => {
    emit('compositionstart', e)
  }
  const compositionupdateEvent = (e) => {
    emit('compositionupdate', e)
  }
  const compositionendEvent = (e) => {
    emit('compositionend', e)
  }

  return {
    isFocus,
    focusEvent,
    blurEvent,
    isEnter,
    mouseenterEvent,
    mouseleaveEvent,
    keydownEvent,
    keyupEvent,
    inputEvent,
    changeEvent,
    compositionstartEvent,
    compositionupdateEvent,
    compositionendEvent
  }
}
