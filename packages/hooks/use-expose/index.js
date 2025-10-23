export const useExpose = (_ref) => {
  const focusExpose = () => {
    _ref.value?.focus()
  }
  const selectExpose = () => {
    _ref.value?.select()
  }

  return { focusExpose, selectExpose }
}
