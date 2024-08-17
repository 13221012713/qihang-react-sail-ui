import React, { memo } from 'react';
import './styles/index.less'; // 引入样式

export interface ModalProps {
  /** 是否显示弹窗 */
  visible?: boolean;
  /** 点击确定按钮的回调 */
  onConfirm?: () => void;
  /** 点击取消按钮或关闭弹窗的回调 */
  onCancel?: () => void;
  /** 自定义类名 */
  className?: string;
  /** 内联样式 */
  style?: React.CSSProperties;
  /** 弹窗标题 */
  title?: React.ReactNode;
  /** 弹窗内容 */
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = memo((props) => {
  const {
    visible = false,
    onConfirm,
    onCancel,
    className = '',
    style,
    title,
    children,
  } = props;

  // 用于关闭弹窗的函数
  const close = () => {
    if (onCancel) onCancel();
  };

  // 点击遮罩层时关闭弹窗
  const handleMaskClick = () => {
    close();
  };

  // 点击确定按钮时执行的操作
  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    close();
  };

  // 如果不可见，不渲染弹窗
  if (!visible) return null;

  return (
    <div className={`modal ${className}`} style={style}>
      <div className="modal-mask" onClick={handleMaskClick}></div>
      <div className="modal-dialog">
        <div className="modal-content">
          {title && <div className="modal-header">{title}</div>}
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="modal-btn" onClick={close}>
              取消
            </button>
            <button type="button" className="modal-btn" onClick={handleConfirm}>
              确定
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Modal;
