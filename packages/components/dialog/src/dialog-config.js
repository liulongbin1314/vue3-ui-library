// Dialog 组件的 props 配置
export const dialogProps = {
  title: { type: String, default: '' },
  footer: { type: Boolean, default: true },
  showClose: { type: Boolean, default: true },
  buttonSize: { type: String, default: 'default' },
  cancelButtonText: { type: String, default: '取消' },
  confirmButtonText: { type: String, default: '确认' },
  cancelButtonShow: { type: Boolean, default: true },
  confirmButtonShow: { type: Boolean, default: true },
  escapeClose: { type: Boolean, default: true },
  // 是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 Esc 键）进行区分
  // 如果值为 false，则点击遮罩层、ESC、关闭按钮，都返回 cancel
  // 如果值为 true，则需要区分 cancel 和 close
  distinguishCancelAndClose: { type: Boolean, default: false },
  destroyOnClosed: { type: Boolean, default: false }
}
