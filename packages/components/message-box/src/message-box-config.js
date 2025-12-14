export const messageBoxProps = {
  gray: { type: Boolean, default: true },
  blur: { type: Boolean, default: true },
  penetrable: { type: Boolean, default: false },
  message: { type: String, default: '' },
  type: { type: String, default: '' },
  icon: { type: [String, Object], default: '' },
  iconSize: { type: Number, default: 24 },
  iconColor: { type: String, default: '' },
  callback: Function
}
