export const useDialogEvent = ({ visible }) => {
  const close = () => {
    visible.value = false
  }

  const handleClose = () => {
    close()
  }

  return { handleClose }
}
