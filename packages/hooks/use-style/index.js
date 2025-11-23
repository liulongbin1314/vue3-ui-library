const reg = /^\d+$/

export const useStyle = () => {
  const fontSize = (value) => {
    if (!value) return {}

    if (reg.test(value)) {
      // 纯数字
      return { fontSize: value + 'px' }
    } else {
      // 带单位的值
      return { fontSize: value }
    }
  }

  const color = (value) => {
    return value ? { color: value } : {}
  }

  const width = (value) => {
    if (!value) return {}

    const targetValue = reg.test(value) ? value + 'px' : value
    return { width: targetValue }
  }

  const height = (value) => {
    if (!value) return {}

    const targetValue = reg.test(value) ? value + 'px' : value
    return { height: targetValue }
  }

  const textAlign = (value) => {
    if (!value) return {}

    const targetValue = { textAlign: 'left' }
    value === 'right' && (targetValue.textAlign = 'right')

    return targetValue
  }

  return { fontSize, color, width, height, textAlign }
}
