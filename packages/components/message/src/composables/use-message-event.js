export const useMessageEvent = () => {
  const handleAfterLeave = (el) => {
    document.body.removeChild(el)
  }

  return { handleAfterLeave }
}
