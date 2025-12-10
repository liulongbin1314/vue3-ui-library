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
  escapeClose: { type: Boolean, default: true }
}
