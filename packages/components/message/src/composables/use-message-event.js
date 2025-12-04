import { closeMessage } from '../instance'

export const useMessageEvent = ({ state }) => {
  const handleAfterLeave = (el) => {
    document.body.removeChild(el)
  }

  const handleMouseEnter = () => {
    state.stop()
  }

  const handleMouseLeave = () => {
    state.start()
  }

  const handleIconClick = (id) => closeMessage(id)

  return { handleAfterLeave, handleMouseEnter, handleMouseLeave, handleIconClick }
}
